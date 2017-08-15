/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  LayoutAnimation
} from 'react-native';

export default class detoxDemo extends Component {
  state = {
    open: false
  };

  _onPress = () => {
    // Animate the update
    LayoutAnimation.configureNext({
      duration: 800,
      create: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.opacity,
        springDamping: 0.5
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.5
      }
    });
    this.setState({ open: !this.state.open })
  }

  renderMenu() {
    if (!this.state.open) {
      return null
    }
    return (
      <View style={styles.menu} testID='menu'>
        <TouchableOpacity onPress={this._onPress} testID='menuCloseButton'>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
        <Text>Menu</Text>
      </View>
    );
  }

  render() {
    const data = [...Array(20).keys()]
    return (
      <View style={styles.container} testID='welcome'>
        <TextInput style={{ backgroundColor: 'white' }} testID='textInput' />
        <ScrollView testID='scrollview'>
          {data.map(i => (
            <View key={`list-${i}`} style={styles.row}>
              <Text>{i}</Text>
            </View>
          ))}
          <View style={styles.content}>
            <TouchableOpacity onPress={this._onPress} testID='menuButton'>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Press me!</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {this.renderMenu()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddddd'
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  row: {
    padding: 15,
    backgroundColor: '#e5e5e5'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  menu: {
    backgroundColor: 'red',
    height: 150,
    padding: 15
  }
});

AppRegistry.registerComponent('detoxDemo', () => detoxDemo);
