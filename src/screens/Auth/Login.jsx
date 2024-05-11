import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {Text, TextInput, Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFormik} from 'formik';
import {loginValidate} from '../../utils/validate';
import userData from '../../data/users.json';
import FormInput from '../../components/Input/FormInput';
import KeyboardView from '../../components/Container/TabView';
import FormView from '../../components/Container/FormView';
import {useDispatch} from 'react-redux';
import {LoginService} from '../../service/userService';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [hide, setHide] = useState(true);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidate,
    onSubmit: async data => {
      dispatch(LoginService(data, navigation));
    },
  });

  return (
    <FormView>
      <View style={styles.section}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <Text style={styles.headerText}>Login</Text>
      <FormInput
        label="Email"
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
        error={formik.errors.email}
        touched={formik.touched.email}
      />
      <TextInput
        activeOutlineColor="#000"
        label={'Password'}
        mode="outlined"
        contentStyle={{color: '#000'}}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        secureTextEntry={hide ? true : false}
        outlineStyle={
          formik.errors.password && formik.touched.password
            ? styles.errorInput
            : styles.input
        }
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
      />
      {formik.errors.password && formik.touched.password ? (
        <Text
          style={{color: 'red', marginLeft: 22, fontFamily: 'Poppins-Regular'}}>
          {formik.errors.password}
        </Text>
      ) : null}

      <Text style={styles.forgot} onPress={() => navigation.navigate('Forgot')}>
        Forgot Password?
      </Text>
      <Button
        mode="contained"
        style={styles.button}
        labelStyle={{fontFamily: 'Poppins-Medium', fontSize: 18, color: '#fff'}}
        onPress={formik.handleSubmit}>
        Login
      </Button>
      <View style={styles.footer}>
        <Text style={styles.footer_inner}>Create a new account ?</Text>
        <Text
          style={styles.footer_btn}
          onPress={() => navigation.navigate('Register')}>
          Sign Up
        </Text>
      </View>
      <Text style={styles.conditonText}>_______ (or) _______</Text>
      <View style={styles.social}>
        <TouchableOpacity style={styles.socialBtn}>
          <Image source={require('../../assets/images/google.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <Image source={require('../../assets/images/facebook.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <Image source={require('../../assets/images/apple.png')} />
        </TouchableOpacity>
      </View>
    </FormView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    padding: 20,
  },
  logo: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  headerText: {
    fontSize: 36,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    marginBottom: 12,
    color: '#000',
  },
  label: {
    color: '#333',
    fontFamily: 'Poppins-Regular',
  },
  errorLabel: {
    color: 'red',
  },
  input: {
    borderRadius: 30,
    marginLeft: 12,
    marginRight: 12,
    borderColor: '#B7AFA4',
    borderWidth: 1,
  },
  errorInput: {
    borderRadius: 30,
    marginLeft: 12,
    marginRight: 12,
    borderColor: 'red',
    borderWidth: 1,
  },
  bodyInput: {
    paddingStart: 12,
    marginTop: 2,
    marginBottom: 15,
    height: 45,
    fontSize: 14,
    backgroundColor: '#fff',
  },
  inputIcon: {
    marginLeft: -16,
  },
  button: {
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: '#0050D1',
    padding: 4,
    borderRadius: 30,
  },
  forgot: {
    marginLeft: 'auto',
    marginRight: 12,
    marginBottom: 12,
    marginTop: 12,
    color: '#2358FB',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 26,
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
  conditonText: {
    textAlign: 'center',
    color: '#aaa',
    marginTop: 6,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 6,
  },
  socialBtn: {
    paddingTop: 10,
    paddingLeft: 8,
    paddingRight: 8,
  },
});
