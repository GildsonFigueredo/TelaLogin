import React, { useState } from 'react';
import { Alert, Text, StyleSheet, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CreateUser (props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [data, setData] = useState('');

    async function handleCreateUser(){    
       
      //Checando a entrada de dados
   if(name && email && password !== '' && password === passwordConfirm){
    
    const data = {
       name,
       email,
       password,
    }
  
    console.log(data);
  
  //Armazenando as informações no dispositivo com AsyncStorage com a chave
         await AsyncStorage.setItem('@senha', JSON.stringify(data));
            //Mensagem de alerta informando que os dados estão salvos
            Alert.alert('Parabéns','Cadastro criado com sucesso');
              props.navigation.navigate('Login')
          }else {
              Alert.alert('Atenção','Ops! algo errado');
          }
      }   

       return (
        <View style={styles.Container}>
        <View style={styles.form}>
           
            <TextInput style={styles.inputUserName} placeholder='Nome'
            autoCompleteType='username' autoCapitalize='none'
            placeholderTextColor='#999' autoCorrect={false}
            value={name}
            onChangeText={(event) => setName(event)}
             />     
      
            <TextInput style={styles.inputForm} placeholder='Email'
            autoCompleteType='email' autoCapitalize='none' autoCorrect={false}
            placeholderTextColor='#999'
            value={email}
            onChangeText={(event) => setEmail(event)}
             />          

            <TextInput style={styles.inputForm} placeholder='Senha'
            autoCompleteType='password' autoCapitalize='none'
            secureTextEntry={true}
            placeholderTextColor='#999' autoCorrect={false}
            value={password}
            onChangeText={(event) => setPassword(event)}
             />       

            <TextInput style={styles.inputForm} placeholder='Confirmar senha'
            autoCompleteType='password' autoCapitalize='none' autoCorrect={false}
            secureTextEntry={true}
            placeholderTextColor='#999'
            onChangeText={(event) => setPasswordConfirm(event)}
             />
            <TouchableOpacity style={styles.buttonForm}
            onPress={handleCreateUser} >
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>          
                        
        </View>
    </View>
);
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#143C39',
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputUserName: {
    backgroundColor: '#FFF',
    width: 250,
    height: 35,
    borderRadius: 5,
    padding: 5,        
  },
  inputForm: {
    backgroundColor: '#FFF',
    marginTop: 13,
    width: 250,
    height: 35,
    borderRadius: 5,
    padding: 5,
  },
  buttonForm: {
    backgroundColor: '#9A8100',
    width: 100,
    height: 30,
    borderRadius: 5,
    marginTop: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: '#FFF',
    
  },
})