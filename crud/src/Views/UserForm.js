import React, { useContext, useState } from 'react'
import { Text, TextInput, View, StyleSheet, Pressable } from 'react-native'
import UsersContext from '../context/UsersContext'

export default ({ route, navigation }) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)
    return (
        <View style={style.form}>
            <Text>Name</Text>
            <TextInput
                onChangeText={name => setUser({ ...user, name })}
                placeholder="Informe o Nome"
                value={user.name}
                style={style.input}
            />
            <Text>Email</Text>
            <TextInput
                onChangeText={email => setUser({ ...user, email })}
                placeholder="Informe o Email"
                value={user.email}
                style={style.input}
            />
            <Text>URL do Avatar</Text>
            <TextInput
                onChangeText={url => setUser({ ...user, avatarUrl: url })}
                placeholder="Informe a URL"
                value={user.avatarUrl}
                style={style.input}
            />
            <Pressable
                style={style.button}
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user
                    })
                    navigation.goBack()
                }}
            >
                <Text style={style.textButton}>Salvar</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 5
    },
    button: {
        backgroundColor: '#B6CFB6',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})