import React from "react";
import { View, Text, Image } from "react-native";

import estilo from "../../assets/estilos/estilos";

import vendas from '../../assets/jogo/sales.png';
import dinheiro from '../../assets/jogo/money.png';
import ranking from '../../assets/jogo/ranking.png';
import disco from '../../assets/jogo/disc.png';

export default function Jogo() {
    return (
        <View>
            <Text style={estilo.titulo}>Super Mario bros</Text>

            <Text style={estilo.descricao}>Apesar de não estar disponível no lançamento do console, Super Mario Bros foi o jogo mais vendido do NES e é uma das franquias de jogos mais populares até os dias de hoje.

            {"\n"}
            {"\n"}

            A franquia foi tão popular na época, que 3 jogos da série Super Mario ocupam o top 4 de jogos mais vendidos do NES, com Super Mario Bros em primeiro, Super Mario Bros 3 em segundo e Super Mario Bros 2 em quarto lugar. Confira mais informações sobre o primeiro jogo da franquia Super Mario Bros:
            </Text>

            <View style={estilo.cardContainer}>
                    <View style={estilo.cardHorizontal}>
                        <View style={[estilo.card, estilo.corNintendo]}>
                            <Image style={estilo.icone} source = {vendas}/>

                            <Text style={estilo.cardTexto}>
                            40 milhões de cópias
                            </Text>

                            <Text style={estilo.cardTexto}>
                            Até 1994
                            </Text>
                        </View>

                        <View style={[estilo.card, estilo.corNintendo]}>
                            <Image style={estilo.icone} source = {dinheiro}/>

                            <Text style={estilo.cardTexto}>
                            US$ 72 milhões
                            </Text>

                            <Text style={estilo.cardTexto}>
                            Primeiros 4 meses
                            </Text>
                        </View>
                    </View>

                    <View style={estilo.cardHorizontal}>
                        <View style={[estilo.card, estilo.corNintendo]}>
                            <Image style={estilo.icone} source = {ranking}/>

                            <Text style={estilo.cardTexto}>
                            95% de Aprovação
                            </Text>

                            <Text style={estilo.cardTexto}>
                            Revista CVG
                            </Text>
                        </View>

                        <View style={[estilo.card, estilo.corNintendo]}>
                            <Image style={estilo.icone} source = {disco}/>

                            <Text style={estilo.cardTexto}>
                            Remake em 1993
                            </Text>

                            <Text style={estilo.cardTexto}>
                            Para o SNES
                            </Text>
                        </View>
                    </View>
                </View>
        </View>
    )
}