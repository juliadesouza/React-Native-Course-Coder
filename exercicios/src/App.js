import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Mega from './components/Mega'
import Contador from './components/Contador'
import Carrinho from './components/Carrinho'
import styles from './styles'

const App = () => {
    // const jsx = <Text>Primeiro componente!</Text>
    return <SafeAreaView style={styles.App}>
        {/* <Mega qtdeNumeros="7" /> */}
        {/* <Contador /> */}
        <Carrinho />
    </SafeAreaView>
}

export default App