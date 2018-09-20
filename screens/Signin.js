import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import  FontAwesome, { Icons } from 'react-native-fontawesome'

export default class Landing extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./../img/logo-mtg-treasure.png')} style={styles.logo} />
        <TextInput
          style={styles.input}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
        />
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
          <View style={styles.containerButton}>
            <Text style={styles.textButton}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <FontAwesome>{Icons.chevronLeft}</FontAwesome>
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
    height: 100,
    width: 130,
    marginBottom: 80
  },
  button: {
    backgroundColor: '#00818a',
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 20,
    paddingTop: 20,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 15
  },
  textButton: {
    color: '#fff',
    fontSize: 20
  },
  input: {
    backgroundColor: '#E5E7E9',
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 20,
    paddingTop: 15,
    marginBottom: 15,
    borderRadius: 10,
    fontSize: 16
  }
});

// https://colorhunt.co/palette/124180
