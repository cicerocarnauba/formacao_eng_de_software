from random import randint

def jogoControle(menor, maior):
        num_secreto = randint(menor, maior)
        
        continuarJogo = True
        while continuarJogo:
            palpite = input("qual o seu palpite?\n")

            if palpite == "cancelar":
                print("Jogo cancelado")
                continuarJogo = False
            elif palpite == "pausar":
                while palpite != "continue":
                    palpite = input("Informe continue quando quiser voltar: \n")
                continue
            else:
                continuarJogo = jogo()

        return

def jogo() bool:
    if palpite == num_secreto:
        print("Acertou o número!") 
        return False
    elif palpite<num_secreto:
        print("O número secreto é maior")
    else:
        print("O número secreto é menor")
    return True


run = input("Seja bem vindo ao adivinha o número, deseja iniciar o jogo?\n")

if run == "sim":
    menor = int(input("Qual intervalo de números você deseja jogar? Informe o menor e depois o maior, \nEx:\n1\n10\n"))
    maior = int(input())
    jogoControle(menor, maior)
   