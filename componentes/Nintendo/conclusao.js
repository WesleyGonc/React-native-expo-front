import React from "react";
import { View, Text } from "react-native";

import estilo from "../../assets/estilos/estilos";

export default function Conclusao() {
	return (
	   <View>
            <Text style={estilo.titulo}>Conclusão</Text>

            <Text style={estilo.descricao}>A Nintendo é uma das empresas mais icônicas da indústria de jogos eletrônicos e até hoje atrai milhares de fãs com seus consoles e franquias como Super Mario, The Legend of Zelda, Pokémon, dentre muitas outras séries adoradas pelos fãs. A Nintendo conseguiu crescer em meio a crise dos vídeo games de 1983 e transformar o que parecia ser o fim da indústria em um recomeço extremamente lucrativo.
            {"\n"}
            {"\n"}
            </Text>
        </View>
	)
}