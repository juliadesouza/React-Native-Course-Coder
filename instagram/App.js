import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Header from './src/components/Header'
import Post from './src/components/Post'

export default class App extends Component {
  render() {
    const comments = [{
      nickname: 'Joana Elena Silva',
      comment: 'Excelente foto!'
    },
    {
      nickname: 'Rafael Gustavo Pereira',
      comment: 'Muito ruim! Faco melhor...'
    }]
    return (
      <View style={{ flex: 1 }}>
        <Text>HELLO</Text>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')} comments={comments} />
      </View>
    )
  }
}