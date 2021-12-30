import React from 'react';
import { useState } from 'react'; 
import { SafeAreaView, StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Button } from '../components/Button';

export function UserIdentification(){

  const [isFocused, setIsFocused] = useState(false); 
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const navigation = useNavigation();

  async function handleSubmit(){
    if(!name)
      return Alert.alert('Informe um nome! 😊')
    await AsyncStorage.setItem('@plantmanager:user', name);//@nomedoapp:usuario
    navigation.navigate('Confirmation');
  }

  function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus(){
    setIsFocused(true);
  }

  function handleInputChange(value: string){
    setIsFocused(!!value);
    setName(value);
  }


  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} 
      behavior={Platform.OS=== 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <Text style={styles.emoji}>
              {isFilled ? '😍' : '😊'}
            </Text>
            <Text style={styles.title}>
              Como podemos {'\n'} chamar voce?
            </Text>
            <TextInput 
              style={[styles.input, (isFocused || isFilled) && {borderColor: colors.green}]} 
              placeholder=" Seu nome aqui! " 
              onBlur={handleInputBlur} 
              onFocus={handleInputFocus} 
              onChangeText={handleInputChange}/>
            <View style={styles.footer}>
              <Button 
              title="Confirmar" onPress={handleSubmit}/>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    width: '100%'
  } ,
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
    width: '100%'
  },
  emoji: {
    fontSize: 44
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20
  },
  footer: {
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 20,
  }
});
