import { Pressable, StyleSheet, Text, View } from "react-native";
export interface ResultadoProps{
    pontuacao: number
    totalDePerguntas: number
    reiniciar: () => void
}

export default function Resultado(props: ResultadoProps){
    const{ pontuacao , totalDePerguntas,reiniciar} = props
    
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Você acertou</Text>
            <Text style={styles.destaque}>
                {Math.round((pontuacao /totalDePerguntas) * 100)}%
            </Text>
            <Pressable style={styles.botao} onPress={reiniciar}>
                <Text style={styles.textoBotao}>Reiniciar</Text>
            </Pressable>
        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:'#2E9D48',
        padding: 15,
    },
    texto:{
        color: 'black',
        fontSize: 20,

    },
    destaque:{
        color:'black',
        fontSize: 60,
        fontWeight: '900',
    },
    botao:{
        marginTop: 20,
        backgroundColor:'yellow',
        paddingHorizontal: 20,
        paddingVertical:10,
        borderRadius: 10,
    },
    textoBotao:{
        color:'black'
    },
})