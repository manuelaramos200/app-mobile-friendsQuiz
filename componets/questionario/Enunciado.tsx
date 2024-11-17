import { StyleSheet, Text, View } from 'react-native'

export interface EnunciadoProps{
    enunciado:string
}
export default function Enunciado(props:EnunciadoProps){
    
    return(
        <View style={styles.container}>            
            <Text style={styles.texto}>{props.enunciado}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#B22222',
        padding:20,
        marginHorizontal: 20,
        borderRadius:10,
        textAlign:'center',
    },
    texto:{
        color:'white',
        fontSize: 23,
        textAlign:'center',
        fontWeight:'bold',
        opacity: 0.8,
    },

})