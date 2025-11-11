import java.io.IOException;
import java.net.Socket;

public class cliente {
    private final String SERVER_ADRESS = "127.0.0.1";
    private Socket clienteSocket;

    public void start() throws IOException {
        clienteSocket = new Socket(SERVER_ADRESS, servidor.PORT);
    }

    public static void main(String[] args) {
        cliente cliente = new cliente();
        try {
            cliente.start();
        } catch (IOException e) {
            System.out.println("Erro ao iniciar o cliente");
        }
    }
}
