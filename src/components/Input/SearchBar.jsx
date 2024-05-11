import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');

  const handleSearchChange = text => {
    setSearch(text);
  };

  const handleLocationChange = text => {
    setLocation(text);
  };

  return (
    <View style={styles.con}>
      <View style={styles.searchForm}>
        <Icon name="search" size={20} color="#fff" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search items"
          placeholderTextColor={'#000'}
          value={search}
          onChangeText={handleSearchChange}
        />
      </View>

      <View style={styles.searchForm}>
        <Icon
          name="map-marker"
          size={20}
          color="#fff"
          style={[styles.icon, {paddingLeft: 22}]}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter location"
          placeholderTextColor={'#000'}
          value={location}
          onChangeText={handleLocationChange}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    // marginTop: 50,
  },
  searchForm: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#eee',
    paddingHorizontal: 10,
    marginBottom: 15,
    position: 'relative',
  },
  input: {
    flex: 1,
    minHeight: 50,
    fontSize: 16,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft: 60,
    fontFamily: 'Poppins-Regular',
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: '20%',
    transform: [{translateY: -10}],
    paddingTop: 14,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: 'blue',
  },
});
