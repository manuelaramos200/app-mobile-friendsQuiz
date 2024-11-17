import Pergunta from "@/componets/questionario/Pergunta";
import Resultado from "@/componets/questionario/Resultado";
import Logo from "@/componets/template/Logo";
import Pagina from "@/componets/template/Pagina";
import perguntas from "@/data/constants/perguntas";
import useQuestionario from "@/data/hooks/useQuestionario";
import { View } from "react-native";



export default function Index() {
  const {pergunta, concluido, pontuacao, totalDePerguntas, responder, reiniciar} = useQuestionario()
  return (
    <Pagina>
      <View style={{ gap : 40 }}>
        <Logo/>
        {concluido ? (
          <Resultado pontuacao={pontuacao} totalDePerguntas={totalDePerguntas} reiniciar={reiniciar}/>
        ): (
          <Pergunta pergunta={pergunta} opcaoSelecionada={ responder}/>
        )}
      </View>

    </Pagina>
  );
}
