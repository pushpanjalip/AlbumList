import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>Buy Now</Text>
    </TouchableOpacity>
  );
};
const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
