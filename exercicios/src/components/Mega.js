import React from 'react'
import { Text, View, TextInput } from 'react-native'
import styles from '../styles'
export default class Mega extends React.Component {
    // Inicializando o estado #1
    state = {
        qtdeNumeros: this.props.qtdeNumeros
    }

    // Inicializando o estado #2
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         qtdeNumeros: props.qtdeNumeros
    //     }
    // }

    // Funcao que sera chamada quando seu componente 
    // precisar ser renderizado na tela
    render() {
        return (
            <View>
                <Text style={styles.Text}>
                    {/* props é o nome FIXO, nao use outro */}
                    Gerador de Mega-Sena {this.state.qtdeNumeros}
                </Text>
                <TextInput
                    placeholder='Digite a quantidade de números'
                    value={this.state.qtdeNumeros}
                    onChangeText={qtde => this.setState({ qtdeNumeros: qtde })}
                    style={styles.TextInput}
                />
            </View>
        )
    }
}