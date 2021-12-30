import React from 'react';
import { Dimensions, SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { useState } from 'react';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

export function Welcome() {

  const navigation = useNavigation();

  function handleStart(){
    navigation.navigate('UserIdentification');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper} > 
        <Text style={styles.title}> Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>

        <Image style={styles.image} source={wateringImg} resizeMode='contain' />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas {'\n'}
          plantas. Nós cuidamos de lembrar você 
          sempre que precisar.
        </Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.6}
          onPress={handleStart}
        >
          <Feather name="chevron-right" style={styles.btnIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20    
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    lineHeight: 34
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    color: colors.body_dark,
    textAlign: 'center',
    padding: 20
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  },
  btnIcon: {
    color: colors.white,
    fontSize: 32,
  }
});
