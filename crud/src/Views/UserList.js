import React from 'react'
import { Alert, FlatList, Text, View } from 'react-native'
import { Avatar, Icon, ListItem } from 'react-native-elements'
import { color } from 'react-native-elements/dist/helpers'
import users from '../data/users'

export default props => {
    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() { console.warn('deleted ' + user.id) }
            },
            { text: 'Nao' }
        ])
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem bottomDivider onPress={() => props.navigation.navigate('UserForm', user)}>
                <Avatar source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Icon name='edit' color='#97C1A9' onPress={() => props.navigation.navigate('UserForm', user)} />
                <Icon name='delete' color='#FF968A' onPress={() => confirmUserDeletion(user)} />
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}