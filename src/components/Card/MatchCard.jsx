import {StyleSheet, Image} from 'react-native';
import React from 'react';
import {Avatar, Card, Text} from 'react-native-paper';

const MatchCard = ({navigation, job}) => {
  return (
    <Card
      style={styles.card}
      onPress={() => navigation.navigate('Hiring', {job: job})}>
      <Image
        width={60}
        height={60}
        source={{uri: job.image}}
        style={styles.cardImage}
      />
      <Card.Content style={styles.content}>
        <Text variant="titleLarge" style={styles.cardTitle} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.chip} onPress={() => console.log('Pressed')}>
          {job.type}
        </Text>
        <Text style={styles.place} numberOfLines={1}>
          ({job.place})
        </Text>
      </Card.Content>
    </Card>
  );
};

export default MatchCard;

const styles = StyleSheet.create({
  card: {
    padding: 12,
    backgroundColor: '#FFE3CA',
    marginLeft: 6,
    marginRight: 6,
  },
  content: {
    height: 80,
    width: 120,
  },
  cardImage: {
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
  },
  cardTitle: {
    width: '100%',
    fontFamily: 'Poppins-Medium',
    color: '#000',
    fontSize: 16,
  },
  chip: {
    fontFamily: 'Poppins-Bold',
    borderRadius: 6,
    fontSize: 12,
  },
  place: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
});
