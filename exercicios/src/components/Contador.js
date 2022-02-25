import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../styles'

export default class Contador extends React.Component {
    state = { num: 0 };

    render() {
        return (
            <View>
                <Text>NUMERO: {this.state.num}</Text>
                <View style={styles.ContadorView}>
                    <View style={styles.Button}>
                        <Button
                            title='+'
                            color="#FFF"
                            onPress={() => this.setState({ num: this.state.num + 1 })}
                        />
                    </View>
                    <View style={styles.Button}>
                        <Button
                            title='-'
                            color="#FFF"
                            onPress={() => this.setState({ num: this.state.num - 1 })}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

