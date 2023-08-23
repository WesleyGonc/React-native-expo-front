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
            <Text style={estilo.titulo}>O fenômeno Halo</Text>

            <Text style={estilo.descricao}>Halo: Combat Evolved foi desenvolvido pela Bungie e lançado para o Xbox no dia 15 de novembro de 2001. O game foi um sucesso e em dois meses já estava presente em 50% da base de consoles Xbox.

            {"\n"}
            {"\n"}

            Halo é até hoje um dos jogos mais importantes do Xbox e da indústria como um tudo. Confira a seguir alguns dados sobre o primeiro título da principal franquia do Xbox.
            </Text>

            <View style={estilo.cardContainer}>
                    <View style={estilo.cardHorizontal}>
                        <View style={[estilo.card, estilo.corXbox]}>
                            <Image style={estilo.icone} source = {vendas}/>

                            <Text style={estilo.cardTexto}>
                            4.7 milhões de cópias
                            </Text>

                            <Text style={estilo.cardTexto}>
                            Até Julho de 2006
                            </Text>
                        </View>

                        <View style={[estilo.card, estilo.corXbox]}>
                            <Image style={estilo.icone} source = {dinheiro}/>

                            <Text style={estilo.cardTexto}>
                            US$ 170 milhões
                            </Text>

                            <Text style={estilo.cardTexto}>
                            Apenas nos EUA
                            </Text>
                        </View>
                    </View>

                    <View style={estilo.cardHorizontal}>
                        <View style={[estilo.card, estilo.corXbox]}>
                            <Image style={estilo.icone} source = {ranking}/>

                            <Text style={estilo.cardTexto}>
                            97% de Aprovação
                            </Text>

                            <Text style={estilo.cardTexto}>
                            Metacritic
                            </Text>
                        </View>

                        <View style={[estilo.card, estilo.corXbox]}>
                            <Image style={estilo.icone} source = {disco}/>

                            <Text style={estilo.cardTexto}>
                            Remake em 2014
                            </Text>

                            <Text style={estilo.cardTexto}>
                            Para o Xbox One
                            </Text>
                        </View>
                    </View>
                </View>
        </View>
    )
}