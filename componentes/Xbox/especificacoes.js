import React from "react";
import { View, Text, Image } from "react-native";

import estilo from "../../assets/estilos/estilos";

import cpu from '../../assets/especificacoes/cpu.png';
import gpu from '../../assets/especificacoes/gpu.png';
import ram from '../../assets/especificacoes/ram.png';
import hdd from '../../assets/especificacoes/hdd.png';

export default function Especificacoes() {
    return (
        <View>
            <Text style={estilo.titulo}>Especificações Técnicas</Text>

            <Text style={estilo.descricao}>Confira a seguir as especificações técnicas do Xbox de 2001.</Text>

            <View style={estilo.cardContainer}>
                    <View style={estilo.cardHorizontal}>
                        <View style={[estilo.card, estilo.corXbox]}>
                            <Image style={estilo.icone} source = {cpu}/>

                            <Text style={estilo.cardTexto}>
                            Intel Pentium 3
                            </Text>

                            <Text style={estilo.cardTexto}>
                            733 MHz
                            </Text>
                        </View>

                        <View style={[estilo.card, estilo.corXbox]}>
                            <Image style={estilo.icone} source = {gpu}/>

                            <Text style={estilo.cardTexto}>
                            nVidia NV2A
                            </Text>

                            <Text style={estilo.cardTexto}>
                            233 MHz
                            </Text>
                        </View>
                    </View>

                    <View style={estilo.cardHorizontal}>
                        <View style={[estilo.card, estilo.corXbox]}>
                            <Image style={estilo.icone} source = {ram}/>

                            <Text style={estilo.cardTexto}>
                            64 MB DDR SDRAM
                            </Text>

                            <Text style={estilo.cardTexto}>
                            200 MHz
                            </Text>
                        </View>

                        <View style={[estilo.card, estilo.corXbox]}>
                            <Image style={estilo.icone} source = {hdd}/>

                            <Text style={estilo.cardTexto}>
                            HD 8GB
                            </Text>

                            <Text style={estilo.cardTexto}>
                            5400 RPM
                            </Text>
                        </View>
                    </View>
                </View>
        </View>
    )
}