import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';
//functional component  no construcor used for props
const AlbumDetail = ({ album }) => {
  //Destructuring
  const { title, artist, thumbnail_image, image, url } = album;
  const { textContainerStyle,
          thumbnailImageStyle,
          imageStyle,
          thumbnailContainerStyle,
          titleTextStyle } = styles;
  return (
    <Card>
      <CardItem>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailImageStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={textContainerStyle}>
          <Text style={titleTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardItem>
      <CardItem>
          <Image style={imageStyle} source={{ uri: image }} />
      </CardItem>
      <CardItem>
          <Button onPress={() => Linking.openURL(url)} />
      </CardItem>
    </Card>
  );
};
const styles = {
  textContainerStyle: {
    //flexDirection: 'column',  default no need to apply this
    justifyContent: 'space-around'
  },
  titleTextStyle: {
    fontSize: 18
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailImageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
export default AlbumDetail;
