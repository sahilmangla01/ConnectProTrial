import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HorizontalList = ({children}) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  );
};

export default HorizontalList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 2,
    position: 'relative',
    bottom: 0,
  },
});
