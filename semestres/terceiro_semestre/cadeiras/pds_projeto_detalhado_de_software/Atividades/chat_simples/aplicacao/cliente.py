import socket

#Configuração do Cliente TCP


HOST = 'localhost'
PORT = 50000

cliente = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
cliente.connect((HOST, PORT))


print('Informe uma mensagem: ')
while True:
    
    argumento = input('')
    cliente.sendall(argumento.encode())
    
    if argumento.lower() == 'end':
        print('Fechando conexão...')
        break
   
    result = cliente.recv(1024).decode()
    print(result)
    
cliente.close()