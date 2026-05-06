#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h>
#include <time.h>

#define NUM_PRODUTORAS 6
#define NUM_CONSUMIDORAS 2
#define TAMANHO_BUFFER 5
#define ITENS_POR_PRODUTORA 20
#define DELAY_MAX 5
#define PRECO_MAX 1000

int buffer[TAMANHO_BUFFER];
int entrada = 0, saida = 0, contador = 0;
int produtoras_ativas = NUM_PRODUTORAS;

pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
pthread_mutex_t mutex_consumo = PTHREAD_MUTEX_INITIALIZER;
pthread_cond_t cond_fim = PTHREAD_COND_INITIALIZER;
sem_t sem_vagas;
sem_t sem_itens;

void *producer(void *args)
{
    long tid = (long)args;
    srand((unsigned int)(tid ^ time(NULL)));

    for (int i = 1; i <= ITENS_POR_PRODUTORA; i++) {
        int valor = rand() % PRECO_MAX + 1;

        sem_wait(&sem_vagas);

        // acessar buffer compartilhado ( produzir )
        pthread_mutex_lock(&mutex);
        buffer[entrada] = valor;
        entrada = (entrada + 1) % TAMANHO_BUFFER;
        contador++;
        pthread_mutex_unlock(&mutex);

        sem_post(&sem_itens);

        // imprimir TID/ dados
        printf("(P) TID: %ld | VALOR: R$ %d | ITERACAO: %d\n", tid, valor, i);

        // esperar por um tempo aleatorio
        sleep(rand() % DELAY_MAX + 1);
    }

    // imprimir que finalizou
    printf("(P) TID: %ld finalizou\n\n", tid);

    // sinalizar que finalizou
    pthread_mutex_lock(&mutex);
    if (--produtoras_ativas == 0) {
        pthread_cond_broadcast(&cond_fim);
        for (int i = 0; i < NUM_CONSUMIDORAS * TAMANHO_BUFFER; i++) {
            sem_post(&sem_itens);
        }
    }
    pthread_mutex_unlock(&mutex);

    return NULL;
}

void *consumer(void *args)
{
    long tid = (long)args;
    int iteracao = 1;

    while (1 /* tem produtoras ainda ? */) {
        pthread_mutex_lock(&mutex_consumo);

        pthread_mutex_lock(&mutex);
        if (produtoras_ativas == 0 && contador == 0) {
            pthread_mutex_unlock(&mutex);
            pthread_mutex_unlock(&mutex_consumo);
            break;
        }
        pthread_mutex_unlock(&mutex);

        // esperar 5 dados
        for (int i = 0; i < TAMANHO_BUFFER; i++)
            sem_wait(&sem_itens);

        // acessar buffer compartilhado ( consumir )
        pthread_mutex_lock(&mutex);
        
        if (produtoras_ativas == 0 && contador == 0) {
            pthread_mutex_unlock(&mutex);
            pthread_mutex_unlock(&mutex_consumo);
            break;
        }

        int soma = 0;
        for (int i = 0; i < TAMANHO_BUFFER; i++) {
            soma += buffer[saida];
            saida = (saida + 1) % TAMANHO_BUFFER;
        }
        contador -= TAMANHO_BUFFER;
        pthread_mutex_unlock(&mutex);

        for (int i = 0; i < TAMANHO_BUFFER; i++)
            sem_post(&sem_vagas);

        pthread_mutex_unlock(&mutex_consumo);

        // imprimir TID / dados
        printf("(C) TID: %ld | MEDIA: R$ %d | ITERACAO: %d\n\n", tid, soma / TAMANHO_BUFFER, iteracao++);
    }

    // imprimir que finalizou
    printf("(C) TID: %ld finalizou\n", tid);

    return NULL;
}

int main(void)
{
    pthread_t produtoras[NUM_PRODUTORAS];
    pthread_t consumidoras[NUM_CONSUMIDORAS];
    long tid = 1000;

    sem_init(&sem_vagas, 0, TAMANHO_BUFFER);
    sem_init(&sem_itens, 0, 0);

    // criar threads produtoras
    for (int i = 0; i < NUM_PRODUTORAS; i++)
        pthread_create(&produtoras[i], NULL, producer, (void *)tid++);

    // criar thread consumidora
    for (int i = 0; i < NUM_CONSUMIDORAS; i++)
        pthread_create(&consumidoras[i], NULL, consumer, (void *)tid++);

    // esperar threads terminarem
    for (int i = 0; i < NUM_PRODUTORAS; i++)
        pthread_join(produtoras[i], NULL);
    for (int i = 0; i < NUM_CONSUMIDORAS; i++)
        pthread_join(consumidoras[i], NULL);

    sem_destroy(&sem_vagas);
    sem_destroy(&sem_itens);

    return 0;
}