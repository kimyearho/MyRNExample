import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { observable, action } from 'mobx';
import { observer } from 'mobx-react'

@observer
class App extends React.Component {
  @observable number = 0;

  @action
  increase = () => {
    this.number++;
  }

  @action
  decrease = () => {
    this.number--;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.number}</Text>
        <Button title="+1" onPress={this.increase}>
        </Button>
        <Button title="-1" onPress={this.decrease}>
        </Button>
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
