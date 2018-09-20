import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default class Landing extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./../img/logo-mtg-treasure.png')} style={styles.logo} />
        <Text style={styles.title}>MTG Treasure</Text>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
            <View style={styles.containerButton}>
              <Text style={styles.textButton}>Get Started</Text>
            </View>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e3150',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 40
  },
  logo: {
    height: 200,
    width: 260,
    marginBottom: 30
  },
  button: {
    backgroundColor: '#00818a',
    padding: 20,
    borderRadius: 10
  },
  textButton: {
    color: '#fff',
    fontSize: 20
  }
  
});

// https://colorhunt.co/palette/124180
