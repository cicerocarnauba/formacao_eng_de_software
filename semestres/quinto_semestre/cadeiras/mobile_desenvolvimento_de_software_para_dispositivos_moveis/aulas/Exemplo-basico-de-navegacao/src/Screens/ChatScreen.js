import { Text, View } from "react-native";
import Mensagem from "../compoments/Mensagem";
export default function ChatScreen({navigation}){
    const listaDeMensagens = []// service-> repository
    return <View>
        <Mensagem mensagem="Minha primeira mensagem de teste" dono={true}/>
        <Mensagem mensagem="Minha primeira mensagem de testeMinha primeira mensagem de testeMinha primeira mensagem de testeMinha primeira mensagem de teste" dono={false}/>
    </View>
}