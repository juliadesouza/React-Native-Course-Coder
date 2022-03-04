
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import params from './src/params'
import Field from './src/components/Field';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        <Field />
        <Field opened />
        <Field opened nearMines={1} />
        <Field mined opened exploded />
      </SafeAreaView >
    );
  }
};

const styles = StyleSheet.create({

})
