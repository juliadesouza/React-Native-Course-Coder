import React, { Component } from 'react'
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native'
import Autor from './Autor'
import Comments from './Comments'
import AddComment from './AddComment'

class Post extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Autor email={this.props.email} nickname={this.props.nickname} />
                <Image source={this.props.image} style={styles.image} />
                <Comments comments={this.props.comments} />
                <AddComment />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
})

export default Post;