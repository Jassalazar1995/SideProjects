import java.io.*;
import java.net.*;

public class SimpleServer {
    public static void main(String[] args) {
        int port = 8080; // Port number
        try (ServerSocket serverSocket = new ServerSocket(port)) {
            System.out.println("Server is listening on port " + port);

            // The server runs in an infinite loop listening for client connections
            while (true) {
                Socket socket = serverSocket.accept(); // Accept a client connection
                System.out.println("New client connected");

                OutputStream output = socket.getOutputStream();
                PrintWriter writer = new PrintWriter(output, true);

                // Message to client
                writer.println("Hello, client. Welcome to the Simple Server!");

                socket.close(); // Close the connection to the client
            }

        } catch (IOException ex) {
            System.out.println("Server exception: " + ex.getMessage());
            ex.printStackTrace();
        }
    }
}
