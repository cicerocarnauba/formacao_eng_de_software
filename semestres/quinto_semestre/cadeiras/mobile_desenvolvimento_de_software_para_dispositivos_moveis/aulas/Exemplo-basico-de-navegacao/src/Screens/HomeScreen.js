import { Text, View, StyleSheet, Button} from "react-native";
export default function HomeScreen({ navigation }) {
    return <View  style={style.main}>
        <View style={style.img}>
            <Text>Fulano de tal</Text>
        </View>
        <View style={style.btn}>
            <Button 
                title="conversar"
                onPress={()=>navigation.navigate("ChatScreen")}
            />
        </View>

    </View>
}

const style = StyleSheet.create({
    main:{
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "gray", 
        alignItems: "center"
    },
    img:{flex: 2},
    btn:{flex: 8}
})