import React from "react";
import { View, Text, Image } from "react-native";

import estilo from "../../assets/estilos/estilos";

import cpu from '../../assets/especificacoes/cpu.png';
import gpu from '../../assets/especificacoes/gpu.png';
import ram from '../../assets/especificacoes/ram.png';
import disc from '../../assets/especificacoes/hdd.png';

export default function Especificacoes() {
    return (
        <View>
            <Text style={estilo.titulo}>Especificações Técnicas</Text>

            <Text style={estilo.descricao}>Confira a seguir as especificações técnicas do NES, lançado em 1983.</Text>

            <View style={estilo.cardContainer}>
                    <View style={estilo.cardHorizontal}>
                        <View style={[estilo.card, estilo.corNintendo]}>
                            <Image style={estilo.icone} source = {cpu}/>

                            <Text style={estilo.cardTexto}>
                            Ricoh 2A03
                            </Text>

                            <Text style={estilo.cardTexto}>
                            Processador 8-bit
                            </Text>
                        </View>

                        <View style={[estilo.card, estilo.corNintendo]}>
                            <Image style={estilo.icone} source = {gpu}/>

                            <Text style={estilo.cardTexto}>
                            52 Cores
                            </Text>

                            <Text style={estilo.cardTexto}>
                            256 x 240
                            </Text>
                        </View>
                    </View>

                    <View style={estilo.cardHorizontal}>
                        <View style={[estilo.card, estilo.corNintendo]}>
                            <Image style={estilo.icone} source = {ram}/>

                            <Text style={estilo.cardTexto}>
                            2KB RAM
                            </Text>

                            <Text style={estilo.cardTexto}>
                            Memória
                            </Text>
                        </View>

                        <View style={[estilo.card, estilo.corNintendo]}>
                            <Image style={estilo.icone} source = {disc}/>

                            <Text style={estilo.cardTexto}>
                            Cartucho
                            </Text>

                            <Text style={estilo.cardTexto}>
                            Proprietário
                            </Text>
                        </View>
                    </View>
                </View>
        </View>
    )
}