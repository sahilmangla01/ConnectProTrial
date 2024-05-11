import {
  Keyboard,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const TabView = ({children, style}) => {
  const navigation = useNavigation();
  // console.log('navigation', navigation);
  const parent = navigation.getParent();

  const onScroll = event => {
    let currentPos;
    const currentOffset = event.nativeEvent.contentOffset.y;
    const dif = currentOffset - 0;
    if (currentOffset == 0) {
      console.log('test');
      parent?.setOptions({
        tabBarStyle: {
          display: 'flex',
          position: 'absolute',
          backgroundColor: '#0050D1',
          borderColor: '#fff',
          borderWidth: 1,
          elevation: 4,
          height: 70,
          borderRadius: 50,
          bottom: 10, //5
          marginLeft: 12, // 12
          marginRight: 12, // 12
        },
      });
    }
    if (Math.abs(dif) < 3) {
      parent?.setOptions({
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#0050D1',
          borderColor: '#fff',
          borderWidth: 1,
          elevation: 4,
          height: 70,
          borderRadius: 50,
          bottom: 10, //5
          marginLeft: 12, // 12
          marginRight: 12, // 12
        },
      });
    } else if (dif < 0) {
    } else {
      parent?.setOptions({tabBarStyle: {display: 'none', animated: true}});
    }
    // console.log(currentPos);
    currentOffset;
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView
          // onScroll={onScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          style={[styles.container, style]}>
          {children}
        </ScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TabView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 65,
  },
});
