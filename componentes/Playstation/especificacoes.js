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

            <Text style={estilo.descricao}>Confira a seguir as especificações técnicas do PlayStation, lançado em 1994.</Text>

            <View style={estilo.cardContainer}>
                    <View style={estilo.cardHorizontal}>
                        <View style={[estilo.card, estilo.corPlaystation]}>
                            <Image style={estilo.icone} source = {cpu}/>

                            <Text style={estilo.cardTexto}>
                            Sony CXD8530BQ
                            </Text>

                            <Text style={estilo.cardTexto}>
                            33.8688 MHz
                            </Text>
                        </View>

                        <View style={[estilo.card, estilo.corPlaystation]}>
                            <Image style={estilo.icone} source = {gpu}/>

                            <Text style={estilo.cardTexto}>
                            Sony CXD8514Q
                            </Text>

                            <Text style={estilo.cardTexto}>
                            1MB VRAM
                            </Text>
                        </View>
                    </View>

                    <View style={estilo.cardHorizontal}>
                        <View style={[estilo.card, estilo.corPlaystation]}>
                            <Image style={estilo.icone} source = {ram}/>

                            <Text style={estilo.cardTexto}>
                            2 MB EDO DRAM
                            </Text>

                            <Text style={estilo.cardTexto}>
                            33 MHz
                            </Text>
                        </View>

                        <View style={[estilo.card, estilo.corPlaystation]}>
                            <Image style={estilo.icone} source = {disc}/>

                            <Text style={estilo.cardTexto}>
                            Drive de CD-ROM
                            </Text>

                            <Text style={estilo.cardTexto}>
                            660 MB / disco
                            </Text>
                        </View>
                    </View>
                </View>
        </View>
    )
}