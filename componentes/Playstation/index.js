import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

import estilo from "../../assets/estilos/estilos";

import Conclusao from "./conclusao";
import Especificacoes from "./especificacoes";
import Historia from "./historia";
import Jogo from "./jogo";

export default function PlayStation() {
    return (
        <SafeAreaView>
            <ScrollView style={estilo.container}>
                <Historia />
                <Especificacoes />
                <Jogo />
                <Conclusao />
            </ScrollView>
        </SafeAreaView>
    )
}