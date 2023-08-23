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
            <Text style={estilo.titulo}>Final Fantasy VII</Text>

            <Text style={estilo.descricao}>Um dos jogos mais aclamados do PS1 sem dúvida é Final Fantasy VII. Desenvolvido pela Square e Lançado em 1997 Final Fantasy VII foi um sucesso comercial absoluto, além de ter sido muito bem recebido pelo público e pela crítica especializada.

            {"\n"}
            {"\n"}

            Final Fantasy VII foi um lançamento muito importante para a Sony, isso porque semanas antes do lançamento os consoles PlayStation estavam esgotados por todo Japão, tamanho era o interesse dos jogadores pelo novo título da franquia. Alcançando marcas incríveis, como podem ser vistas a seguir:
            </Text>

            <View style={estilo.cardContainer}>
                    <View style={estilo.cardHorizontal}>
                        <View style={[estilo.card, estilo.corPlaystation]}>
                            <Image style={estilo.icone} source = {vendas}/>

                            <Text style={estilo.cardTexto}>
                            2 milhões de cópias
                            </Text>

                            <Text style={estilo.cardTexto}>
                            Em 2 dias no Japão
                            </Text>
                        </View>

                        <View style={[estilo.card, estilo.corPlaystation]}>
                            <Image style={estilo.icone} source = {dinheiro}/>

                            <Text style={estilo.cardTexto}>
                            US$ 115 milhões
                            </Text>

                            <Text style={estilo.cardTexto}>
                            Em 2 dias no Japão
                            </Text>
                        </View>
                    </View>

                    <View style={estilo.cardHorizontal}>
                        <View style={[estilo.card, estilo.corPlaystation]}>
                            <Image style={estilo.icone} source = {ranking}/>

                            <Text style={estilo.cardTexto}>
                            92% de Aprovação
                            </Text>

                            <Text style={estilo.cardTexto}>
                            Metacritic
                            </Text>
                        </View>

                        <View style={[estilo.card, estilo.corPlaystation]}>
                            <Image style={estilo.icone} source = {disco}/>

                            <Text style={estilo.cardTexto}>
                            Remake em 2020
                            </Text>

                            <Text style={estilo.cardTexto}>
                            Para o PS4
                            </Text>
                        </View>
                    </View>
                </View>
        </View>
    )
}