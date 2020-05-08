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

import Svg, {
  Circle,
} from 'react-native-svg';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <Text>SvgApp</Text>
        <Svg height="50%" width="50%" viewBox="0 0 100 100">
          <Circle 
            cx="50"
            cy="50"
            r="45"
            stroke="blue"
            strokeWidth="2.5"
            fill="green" />
        </Svg>
      </View>
    );
  }
}

export default App;
