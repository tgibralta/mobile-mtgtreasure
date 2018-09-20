import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./../img/logo-mtg-treasure.png')} style={styles.logo} />
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Signin')}>
          <View style={styles.containerButton}>
              <Text style={styles.textButton}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
          <View style={styles.containerButton}>
              <Text style={styles.textButton}>Sign up</Text>
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
    fontWeight: 'bold'
  },
  logo: {
    height: 200,
    width: 260,
    marginBottom: 50
  },
  button: {
    backgroundColor: '#00818a',
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 20,
    paddingTop: 20,
    borderRadius: 10,
    marginBottom: 20
  },
  textButton: {
    color: '#fff',
    fontSize: 20
  }
});

// https://colorhunt.co/palette/124180
