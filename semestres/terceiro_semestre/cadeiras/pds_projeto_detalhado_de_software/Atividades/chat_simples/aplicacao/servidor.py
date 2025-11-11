import socket
# Configurando Servidor com Protocolo TCP

HOST = 'localhost' #127.0.0.1
PORT = 50000

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind((HOST, PORT))
server.listen()
print("Aguardando conexão de um cliente")

i = True
while i:
    conn, ender = server.accept()
    print("Conectado em", ender)
    try:
        while True:
            data = conn.recv(1024).decode()
            if not data:
                print("Fechando a conexão")
                break
            resposta = "a mensagem recebida foi: "+data
            conn.sendall(resposta.encode())
    except ValueError as e:
        print('Erro: Não foram inseridos qualquer informação')
    conn.close()
    i = False