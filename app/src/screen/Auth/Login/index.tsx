import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { formatPhoneNumber, isValidPhoneNumber } from '@/utils/phoneUtils';
import { isValidPassword } from '@/utils/passwordValidation'; 
import {MIN_PASSWORD_LENGTH} from '@/constants/value'
import styles from './styles';


interface LoginValue {
  phone: string,
  password: string,
}

const initialState: LoginValue = { phone: '', password: '' };

export default function LoginPage() {
  
  const [inputValues, setInputValues] = useState<LoginValue>(initialState);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true); 
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const handleChangeInput = (key: 'phone' | 'password', value: string) => {
    
    let processedValue = value;

    if (key === 'phone') {
        processedValue = formatPhoneNumber(value);
        setIsPhoneValid(isValidPhoneNumber(processedValue)); 
    }
    
    if (key === 'password') {
        setIsPasswordValid(isValidPassword(value, MIN_PASSWORD_LENGTH)); 
    }

    setInputValues(prevState => ({
      ...prevState,
      [key]: processedValue
    }));
  };

  const handleLogin = () => {
    const phoneValid = isValidPhoneNumber(inputValues.phone);
    const passwordValid = isValidPassword(inputValues.password, MIN_PASSWORD_LENGTH);
    
    setIsPhoneValid(phoneValid);
    setIsPasswordValid(passwordValid);

    if (!phoneValid || !passwordValid) {
        return;
    }
    
    console.log("Attempting login with:", inputValues);
  }
  
  const isDisabledLoginBtn = Boolean(!inputValues.phone||!inputValues.password);
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.rootContainer}> 
      <KeyboardAvoidingView 
        style={styles.avoidingView} 
        keyboardVerticalOffset={Platform.select({android: 0, ios: 90})}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Заголовок */}
          <View>
            <Text style={styles.title}>Вхід</Text>
          </View>
          
          {/* Кнопки Вхід/Реєстрація */}
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.textBtn}>Вхід</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.textBtn}>Реєстрація</Text>
            </TouchableOpacity>
          </View>
          
          {/* Поля вводу */}
          <View style={styles.inputSection}>
            <Text>Phone*</Text>
            <View style={[styles.inputContainet, !isPhoneValid && styles.inputError]}>
              <TextInput 
              placeholder={"+38 (0__) __-__-__"}
              placeholderTextColor={"#000"}
              value={inputValues.phone}
              onChangeText={text => handleChangeInput('phone', text)}
              keyboardType="phone-pad"
              maxLength={19}
              />
            </View>
            {!isPhoneValid && (
                <Text style={styles.errorText}>Введіть повний номер (+38 XXX XX XX XX).</Text>
            )}
            
            <Text>Password*</Text>
            <View style={[styles.inputContainet, !isPasswordValid && styles.inputError]}> 
              <TextInput 
              placeholder={"Введіть ваш пароль"}
              placeholderTextColor={"#000"}
              value={inputValues.password}
              onChangeText={text => handleChangeInput('password', text)}
              secureTextEntry={isPasswordHidden}
              />
              <TouchableOpacity 
              onPress={()=>{
                setIsPasswordHidden(!isPasswordHidden)
              }}
              hitSlop={{
                top:15,
                bottom:15,
                left:15,
                right:15,
              }}
              style={isPasswordHidden?styles.disablePasswordBtn:styles.activePasswordBtn}
              />
            </View>
            {!isPasswordValid && (
                <Text style={styles.errorText}>Пароль має містити мінімум {MIN_PASSWORD_LENGTH} символів.</Text>
            )}
          </View>
          
          {/* Кнопка Увійти */}
          <View style={styles.buttonSection}>
            <TouchableOpacity style={[styles.Btn, isDisabledLoginBtn&&{opacity:0.5}]} disabled ={isDisabledLoginBtn} onPress={handleLogin}>
              <Text style={styles.textBtnEnd}>Увійти</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
    </TouchableWithoutFeedback>
  );
}
