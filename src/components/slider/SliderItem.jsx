import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import React from 'react';
import {Button, Text} from 'react-native-paper';

const {width, height} = Dimensions.get('screen');

const SlideItem = ({item}) => {
  const translateYImage = new Animated.Value(0);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 500,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={styles.container}>
      <Text style={styles.viewTitle}>{item.title}</Text>
      <Animated.Image
        source={item.img}
        resizeMode="contain"
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />

      <View style={styles.content}>
        {/* <Image source={item.image || ''} style={styles.viewImage} /> */}
        <Text style={styles.viewSmall}>{item.desc}</Text>
      </View>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  image: {
    flex: 0.6,
    width: '80%',
  },

  viewTitle: {
    fontSize: 35,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    marginTop: 12,
  },
  viewSmall: {
    width: 250,
    textAlign: 'justify',
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Light',
  },
  content: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
