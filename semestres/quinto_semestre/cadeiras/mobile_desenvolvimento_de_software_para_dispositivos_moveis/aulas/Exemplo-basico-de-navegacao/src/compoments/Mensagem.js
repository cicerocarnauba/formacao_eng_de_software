import { View, Text, StyleSheet } from "react-native"

export default function Mensagem({ mensagem, dono }) {
    const justifyContent = dono ? "flex-end" : "flex-start"
    const backgroundColor = dono ? "#DCF8C6" : "#ECE5DD"
    return <View style={[style.container, {justifyContent}]}>
        <View style={[style.main, {backgroundColor}]}>
                <Text style={style.mensagem}>{mensagem}</Text>
        </View>
    </View>
}

const style = StyleSheet.create({
    container:{
        width: "100%", 
        flexDirection: "row",
        padding: 5
    },
    main:{
        maxWidth: "70%", 
        padding: 5,
        borderWidth: 1, 
        borderColor: "gray", 
        borderRadius: 15
    },
    mensagem:{
        padding: 5,
        fontSize: 14
    }
})