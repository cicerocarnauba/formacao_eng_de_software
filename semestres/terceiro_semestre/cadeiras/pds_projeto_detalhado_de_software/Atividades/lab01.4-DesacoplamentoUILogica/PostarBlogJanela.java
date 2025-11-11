package ufc.quixada.es.pds.grasp.controlador;

import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JTextArea;
import javax.swing.JTextField;

@SuppressWarnings("serial")
public class PostarBlogJanela extends JFrame implements ActionListener {

	JButton publicar;
	JTextField titulo;
	JTextArea corpo;

	public static void main(String[] args){
		PostarBlogJanela postarBlogJanela = new PostarBlogJanela();
		postarBlogJanela.mostrar();
	}
	private void mostrar() {
		this.setSize(400,400);
		this.setLocation(100, 100);
		this.setVisible(true);
	}
	
	@Override
	public void actionPerformed(ActionEvent publicarPost) {
        PostController postController = new PostController();
        postController.publicarPost(titulo.getText(),corpo.getText());
	}
}
