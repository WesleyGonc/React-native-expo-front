import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
        paddingHorizontal: 25,
    },
    capa: {
        width: "100%",
        height: 250,
        marginTop: 15,
        marginBottom: 30,
        resizeMode: "cover",
    },
    titulo: {
        textAlignVertical: "center",
        textAlign: "center",
        fontWeight: "bold",
        height: 60,
    },
    descricao: {
        lineHeight: 25,
    },
    cardContainer: {
        marginTop: 25,
    },
    cardHorizontal: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 15,
    },
    card: {
        width: 150,
        height: 150,

        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",

        paddingBottom: 20,
        boxSizing: "border-box",

        borderRadius: 5,
    },
    icone: {
        marginBottom: 5,
        tintColor: "white",
    },
    cardTexto: {
        color: "white",
        fontWeight: "bold",
    },
    corXbox: {
        backgroundColor: "green",
    },
    corPlaystation: {
        backgroundColor: "blue",
    },
    corNintendo: {
        backgroundColor: "red",
    },
  });

  export default estilo;