import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import Drupal from './img/drupal.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <Text>SvgApp</Text>
        <Drupal />
      </View>
    );
  }
}

export default App;
