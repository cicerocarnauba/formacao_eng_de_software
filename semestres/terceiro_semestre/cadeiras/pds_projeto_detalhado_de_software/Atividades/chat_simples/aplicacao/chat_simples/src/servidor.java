import org.w3c.dom.ls.LSOutput;

import java.io.IOException;
import java.net.ServerSocket;

public class servidor {
    public static final int PORT = 4000;
    private ServerSocket serverSocket;

    public void start() throws IOException {
        System.out.println("Servidor Iniciado");
        serverSocket = new ServerSocket(PORT);
    }

    public static void main(String[] args) {
        try {
            servidor servidor = new servidor();
            servidor.start();
        } catch (IOException ex){
            System.out.println("Erro ao abrir o servidor");
        }
        System.out.println("Servidor Finalizado");

    }
}
