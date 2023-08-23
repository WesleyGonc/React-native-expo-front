import React from "react";
import { View, Text } from "react-native";

import estilo from "../../assets/estilos/estilos";

export default function Conclusao() {
	return (
	   <View>
            <Text style={estilo.titulo}>Conclusão</Text>

            <Text style={estilo.descricao}>A Microsoft conseguiu criar com o Xbox uma grande base de fãs em todo mundo que jogam suas franquias diariamente. O que começou como uma tentativa de defender o territórios dos PCs nas salas se tornou um dos produtos mais vendidos da companhia e parte de um dos setores mais lucrativos da industria do entretenimento.
            {"\n"}
            {"\n"}
            </Text>
        </View>
	)
}