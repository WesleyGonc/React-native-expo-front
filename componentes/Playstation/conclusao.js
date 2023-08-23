import React from "react";
import { View, Text } from "react-native";

import estilo from "../../assets/estilos/estilos";

export default function Conclusao() {
	return (
	   <View>
            <Text style={estilo.titulo}>Conclusão</Text>

            <Text style={estilo.descricao}>A Sony construiu com o PlayStation algo que para muita gente era impensável, não apenas por mostrar que era possível construir um produto barato e de qualidade, mas também por ter conseguido vencer uma das líderes de mercado na época de seu lançamento na briga pela fidelidade dos consumidores.
            {"\n"}
            {"\n"}
            </Text>
        </View>
	)
}