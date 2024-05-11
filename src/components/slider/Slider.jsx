import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import SlideItem from './SliderItem';
import Pagination from './Pagination';
import {useNavigation} from '@react-navigation/native';

const slideData = [
  {
    id: 1,
    img: require('../../assets/images/slider_0.png'),
    title: 'Welcome',
    desc: 'Welcome to HR Connect Pro! Get started on your job search journey with our intuitive job search feature. Find the perfect job that matches your skills and preferences effortlessly',
  },
  {
    id: 2,
    img: require('../../assets/images/slider_1.png'),
    title: 'About',
    desc: "HR Connect Pro offers a platform for users to attend mock exams and find relevant jobs through our mobile and web app. Our platform not only provides mock exams but also enhances users' understanding of various topics.",
  },
  {
    id: 3,
    img: require('../../assets/images/slider_2.png'),
    title: 'About',
    desc: 'Say hello to our friendly chatbot! Our AI-powered chatbot is here to assist you every step of the way. Ask questions, get tips, and receive personalized recommendations to enhance your job search experience.',
  },
  {
    id: 4,
    img: require('../../assets/images/slider_3.png'),
    title: 'About',
    desc: 'Dive into the data with our analytics page. Gain valuable insights into your job search progress, track application statuses, and discover trends in the job market to stay ahead of the competition. Welcome to a smarter way of navigating your career path with HR Connect Pro!',
  },
  {
    id: 5,
    img: require('../../assets/images/congrats.gif'),
    title: 'Congratulations!',
    desc: 'Dive into the data with our analytics page. Gain valuable insights into your job search progress, track application statuses, and discover trends in the job market to stay ahead of the competition. Welcome to a smarter way of navigating your career path with HR Connect Pro!',
  },
];

const Slider = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    // console.log('viewableItems', viewableItems);
    setIndex(viewableItems[0].index);
  }).current;

  const handleNextButton = () => {
    const nextIndex = index + 1;
    // Scroll to the next slide
    if (flatListRef.current && nextIndex < slideData.length) {
      flatListRef.current.scrollToIndex({index: nextIndex});
    } else if (index === 4) {
      // navigation.navigate('Dashboard')
      navigation.replace('Login');
    }
  };

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slideData}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={slideData} scrollX={scrollX} index={index} />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleNextButton}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    borderRadius: 12,
    backgroundColor: '#0050D1',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    lineHeight: 50,
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
});
