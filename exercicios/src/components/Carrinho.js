import React from 'react'
import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native'

export default class Carrinho extends React.Component {
    state = {
        item: "",
        items: []
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'space-between' }}>
                <Text style={styles.Title}>Lista de Compras</Text>
                <View style={styles.List}>
                    {
                        this.state.items.map((i) => {
                            return (
                                <View style={styles.Item}>
                                    <Text style={styles.ItemText}>{i}</Text>
                                </View>
                            )
                        })
                    }
                </View>
                <View>
                    <TextInput
                        style={styles.TextInput}
                        value={this.state.item}
                        onChangeText={(newItem) => this.setState({ item: newItem })}
                    />
                    <Pressable
                        style={styles.Pressable}
                        onPress={() => this.setState({ items: [...this.state.items, this.state.item] })}
                    >
                        <Text style={styles.Button}>ADD</Text>
                    </Pressable>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    TextInput: {
        borderBottomWidth: 1,
        padding: 10,
        fontSize: 18
    },
    Pressable: {
        marginTop: 10,
        backgroundColor: "#696",
        padding: 10,
    },
    Button: {
        fontSize: 20,
        fontWeight: "600",
        color: "#fff",
        textAlign: "center"
    },
    List: {
        marginBottom: 20,
        padding: 10
    },
    Item: {
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#ccc",
    },
    ItemText: {
        fontSize: 18,
    },
    Title: {
        fontWeight: "500",
        fontSize: 35,
        color: "#666",
        marginTop: 50,
        textAlign: 'center'
    }
})