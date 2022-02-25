import { StyleSheet } from "react-native";

export default StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'stretch',
        margin: 30
    },
    Text: {
        fontSize: 30,
        color: 'pink',
        fontWeight: '600',
    },
    TextInput: {
        backgroundColor: "#bee0f8"
    },
    Button: {
        backgroundColor: "#9cc",
        marginTop: 10,
    },
    ContadorView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})