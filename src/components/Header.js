import React from 'react';
import { Text, View } from 'react-native';

//create component

//see the way of passing props
const Header = (props) => {
  const { viewStyle, textStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}> { props.headerText } </Text>
      </View>
    );
};

//use of Stylesheet.create
const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  textStyle: {
    fontSize: 20,
    color: 'red'
  }
};

//Make component available to other parts of the app
export default Header;
