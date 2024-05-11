import {
  Alert,
  Keyboard,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Text, TextInput, Button, Portal, Modal, Card} from 'react-native-paper';
import React, {useCallback, useLayoutEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SelectList} from 'react-native-dropdown-select-list';
import DocumentPicker, {types} from 'react-native-document-picker';
import BackHeader from '../../components/Header/BackHeader';
import KeyboardView from '../../components/Container/TabView';
import FormView from '../../components/Container/FormView';
import {useFormik} from 'formik';
import {DateFormat} from '../../utils/dateTime';
import {useDispatch, useSelector} from 'react-redux';
import {EditUserService, RegisterService} from '../../service/userService';
import SuccessModal from '../../components/Modal/SuccessModal';
import {showModal} from '../../redux/features/commonSlice';
import TabView from '../../components/Container/TabView';

const EditProfile = ({navigation}) => {
  const {user} = useSelector(state => state.users);
  const dispatch = useDispatch();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [hide, setHide] = useState(true);
  const [fileResponse, setFileResponse] = useState([]);
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  }; // Add borderRadius: 10 here

  const formik = useFormik({
    initialValues: {
      username: user?.username,
      email: user?.email,
      mobile: user?.mobile,
      dob: new Date(user?.dob),
      address: user?.address,
      country: user?.country,
      state: user?.state,
      resume: 'http://localhost',
    },
    // validationSchema: loginValidate,
    onSubmit: async data => {
      console.log('registerForm', data);
      dispatch(EditUserService(data));
      // navigation.navigate('Education', {registerForm: data});
    },
  });

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        type: [types.pdf],
        presentationStyle: 'fullScreen',
      });
      setFileResponse(response);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const data = [
    {key: '1', value: 'India'},
    {key: '2', value: 'USA'},
    {key: '3', value: 'UK'},
    {key: '4', value: 'Russia'},
    {key: '5', value: 'Mexico'},
    {key: '6', value: 'Germany'},
    {key: '7', value: 'Denmark'},
  ];

  const roleData = [
    {key: '1', value: 'Candidate'},
    {key: '2', value: 'Recruiter'},
  ];

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      header: () => <BackHeader navigation={navigation} title="Edit Profile" />,
      statusBarColor: '#0050D1',
    });
  }, [navigation]);

  console.log('my user', user);
  return (
    <TabView>
      <View style={styles.section}>
        <View style={styles.container1}>
          <View style={styles.profileImageContainer}>
            <TouchableOpacity
              onPress={() => {}}
              style={styles.editProfileButton}>
              <FontAwesome5 name="edit" size={20} color="#007bff" />
            </TouchableOpacity>
            <Image
              source={{
                uri: 'https://pbs.twimg.com/profile_images/1644061982239387648/4pxcTG5J_400x400.jpg',
              }}
              style={styles.profileImage}
            />
          </View>
        </View>
        <TextInput
          activeOutlineColor="#000"
          label="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
          onBlur={formik.handleBlur('username')}
          mode="outlined"
          contentStyle={{color: '#000'}}
          outlineStyle={styles.input}
          style={styles.bodyInput}
        />
        <TextInput
          activeOutlineColor="#000"
          label="Email"
          disabled={true}
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          mode="outlined"
          contentStyle={{color: '#000'}}
          outlineStyle={styles.input}
          style={styles.bodyInput}
        />

        <TextInput
          activeOutlineColor="#000"
          label="Mobile"
          value={formik.values.mobile}
          onChangeText={formik.handleChange('mobile')}
          onBlur={formik.handleBlur('mobile')}
          mode="outlined"
          contentStyle={{color: '#000'}}
          keyboardType="number-pad"
          outlineStyle={styles.input}
          style={styles.bodyInput}
        />
        <Button
          icon={'calendar-outline'}
          title="Show Date Picker"
          onPress={showDatePicker}
          labelStyle={{marginRight: 'auto'}}
          style={{
            borderWidth: 1,
            borderColor: '#B7AFA4',
            backgroundColor: '#fff',
            height: 45,
            marginLeft: 12,
            marginRight: 12,
            marginBottom: 12,
            borderRadius: 30,
          }}>
          <Text style={{color: '#000'}}>
            {DateFormat(formik.values.dob) === DateFormat(new Date())
              ? 'Date of Birth'
              : DateFormat(formik.values.dob)}
          </Text>
        </Button>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          date={formik.values.dob}
          // maximumDate={new Date('2022-01-31Z00:00:00:000')}
          onConfirm={newDate => {
            hideDatePicker();
            formik.setFieldValue('dob', newDate);
          }}
          onCancel={hideDatePicker}
        />
        {/* <SelectList
          placeholder="Role"
          inputStyles={{color: '#000'}}
          dropdownTextStyles={{color: '#000'}}
          search={false}
          fontFamily="Poppins-Regular"
          boxStyles={[styles.input, {marginBottom: 12}]}
          setSelected={formik.handleChange('role')}
          data={roleData}
          save="value"
        /> */}
        <TextInput
          activeOutlineColor="#000"
          error={formik.errors.address && true}
          label="Address"
          value={formik.values.address}
          onChangeText={formik.handleChange('address')}
          onBlur={formik.handleBlur('address')}
          mode="outlined"
          contentStyle={{color: '#000'}}
          outlineStyle={styles.input}
          style={styles.bodyInput}
        />
        <SelectList
          placeholder="Country"
          inputStyles={{color: '#000'}}
          dropdownTextStyles={{color: '#000'}}
          search={true}
          defaultOption={{key: 'country', value: user?.country}}
          fontFamily="Poppins-Regular"
          boxStyles={[styles.input, {marginBottom: 12}]}
          setSelected={formik.handleChange('country')}
          data={data}
          save="key"
        />
        <TextInput
          activeOutlineColor="#000"
          error={formik.errors.state && true}
          label="State"
          value={formik.values.state}
          onChangeText={formik.handleChange('state')}
          onBlur={formik.handleBlur('state')}
          mode="outlined"
          contentStyle={{color: '#000'}}
          outlineStyle={styles.input}
          style={styles.bodyInput}
        />
        {/* <TextInput
          activeOutlineColor="#000"
          label="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          mode="outlined"
          contentStyle={{color: '#000'}}
          secureTextEntry={hide ? true : false}
          outlineStyle={styles.input}
          style={styles.bodyInput}
          right={
            <TextInput.Icon
              onPress={() => {
                Keyboard.dismiss();
                setHide(!hide);
              }}
              icon={hide ? 'eye-off' : 'eye'}
              size={20}
              style={styles.inputIcon}
              color={'#2358FB'}
            />
          }
        /> */}
        <Button
          icon="folder-outline"
          mode="contained"
          labelStyle={{color: '#fff'}}
          style={[
            styles.Resume,
            {backgroundColor: fileResponse.length > 0 ? 'green' : 'black'},
          ]}
          onPress={() => handleDocumentSelection()}>
          {fileResponse.length > 0
            ? 'Upload Successfully!!!'
            : ' Upload Resume'}
        </Button>
        {fileResponse.map((file, index) => (
          <Text
            key={index.toString()}
            style={styles.uri}
            numberOfLines={1}
            ellipsizeMode={'middle'}>
            {file?.uri}
          </Text>
        ))}
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={{color: '#fff'}}
          onPress={formik.handleSubmit}>
          Save Changes
        </Button>
      </View>
    </TabView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    padding: 0,
  },
  headerText: {
    fontSize: 36,
    padding: 15,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },
  input: {
    borderRadius: 30,
    marginLeft: 12,
    marginRight: 12,
    borderColor: '#B7AFA4',
    borderWidth: 1,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  bodyInput: {
    paddingStart: 12,
    marginBottom: 12,
    height: 45,
    fontSize: 14,
    backgroundColor: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  buttonOutline: {
    marginRight: 'auto',
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 21,
  },
  button: {
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: '#0050D1',
    padding: 4,
    borderRadius: 30,
    marginBottom: 20,
  },
  Resume: {
    marginTop: 12,
    marginLeft: 15,
    width: 'auto',
    marginRight: 'auto',
    backgroundColor: '#2F2F42',
    marginBottom: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },
  footer_inner: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  footer_btn: {
    color: '#2358FB',
    marginLeft: 6,
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
  model: {
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50,
  },
  textModel: {
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  Button: {
    paddingTop: 15,
  },
  Button2: {
    borderRadius: 10,
    backgroundColor: 'blue',
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 100,
    marginRight: 100,
    padding: 10,
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingTop: 8,
    paddingBottom: 12,
    marginLeft: 16,
    marginRight: 16,
  },
  profileImageContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editProfileButton: {
    position: 'absolute',
    top: 70,
    right: -20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    padding: 5,
    // left:0
  },
});
