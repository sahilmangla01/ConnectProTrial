import {StyleSheet, View} from 'react-native';
import {List, Text, Checkbox, Button} from 'react-native-paper';

import React, {useLayoutEffect, useState} from 'react';
import BackHeader from '../../components/Header/BackHeader';
import TabView from '../../components/Container/TabView';

const Filter = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [accordion, setAccordion] = useState('1');
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      header: () => <BackHeader navigation={navigation} title="FILTER" />,
    });
  }, [navigation]);
  return (
    <TabView>
      <List.AccordionGroup expandedId={accordion}>
        <List.Accordion
          onPress={() => setAccordion('1')}
          expanded={accordion === '1' && true}
          title="Job Type"
          id={accordion}
          style={styles.accordion}
          titleStyle={styles.title}>
          <Checkbox.Item
            label="Full Time"
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color="#0050D1"
            labelStyle={styles.checkbox_label}
          />
          <Checkbox.Item
            label="Part Time"
            status="checked"
            color="#0050D1"
            labelStyle={styles.checkbox_label}
          />
          <Checkbox.Item
            label="Internship"
            status="checked"
            color="#0050D1"
            labelStyle={styles.checkbox_label}
          />
        </List.Accordion>
        <List.Accordion
          expanded={accordion === '2' && true}
          onPress={() => setAccordion('2')}
          title="Job Categories"
          id={accordion}
          style={styles.accordion}
          titleStyle={styles.title}>
          <Checkbox.Item
            label="Design"
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color="#0050D1"
            labelStyle={styles.checkbox_label}
          />
          <Checkbox.Item
            label="Sales"
            status="checked"
            color="#0050D1"
            labelStyle={styles.checkbox_label}
          />
          <Checkbox.Item
            label="Marketing"
            status="checked"
            color="#0050D1"
            labelStyle={styles.checkbox_label}
          />
        </List.Accordion>
        <View>
          <List.Accordion
            expanded={accordion === '3' && true}
            onPress={() => setAccordion('3')}
            title="Experience"
            id={accordion}
            style={styles.accordion}
            titleStyle={styles.title}>
            <Checkbox.Item
              label="Frasher"
              status="checked"
              color="#0050D1"
              labelStyle={styles.checkbox_label}
            />
            <Checkbox.Item
              label="1-2 yr"
              status="checked"
              color="#0050D1"
              labelStyle={styles.checkbox_label}
            />
          </List.Accordion>
        </View>
      </List.AccordionGroup>
    </TabView>
  );
};

export default Filter;

const styles = StyleSheet.create({
  accordion: {
    borderWidth: 0.5,
    borderColor: '#000',
    paddingBottom: 0,
    paddingTop: 0,
    marginTop: 12,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },
  checkbox_label: {
    fontFamily: 'Poppins-Regular',
  },
});
