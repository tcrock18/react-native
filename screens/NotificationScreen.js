import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class NotificationScreen extends React.Component {
  static navigationOptions = {
    title: 'Notifications',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>
          Notifications Screen
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});