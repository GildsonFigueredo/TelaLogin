import * as React from 'react';
import { useState } from 'react';
import { Alert, View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';




function Login(props) {

  const data = {
    email,
    password,
 }

       const clicou =() =>{
         if (email === 'gildson@uol.com' && password === '123'){
          AsyncStorage.getAllKeys( );
          props.navigation.navigate('HomeScreen')
          setEmail('')
          setPassword('')
         } 
         else {
          Alert.alert ('Atenção','Favor insirir os dados corretos');
          setEmail('')
          setPassword('')
         }
       }

       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
      
       const cadastro = () =>{
          props.navigation.navigate('CreateUser');
       }

    return (
        <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/user-image2.png')}
          style={styles.logo} >
            <Image
            source={require('../../assets/image.png')}
            />
          </ImageBackground>
        <TextInput
           style={styles.input}
           autoCapitalize='none'
           placeholder="Digite seu email"
           value={email}
           placeholderTextColor="#999"
           keyboardType="email-address"
           onChangeText={(event) => setEmail(event)}
       
         />    
         <TextInput
                   style={styles.input}
                   secureTextEntry={true}
                   placeholder="Digite sua senha"
                   placeholderTextColor="#999"
                   value={password}
                   keyboardType="numeric"
                   onChangeText={(event) => setPassword(event)} 
                                           
          />  
         <TouchableOpacity
                  style={styles.botao}
                  onPress={clicou} >
                  <Text style={styles.botaoText}>Entrar</Text>
                 </TouchableOpacity>
         <TouchableOpacity onPress={cadastro} >
                  <Text style={styles.ButtonCreate} >Crie uma conta clicando aqui!</Text>
          </TouchableOpacity>        
        <StatusBar style="auto" />
      </View>
    );
  }
  
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#143C39',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      flex:-1,
      marginTop: -140,
       marginBottom: 64,
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height:100,
    },
    input: {
      marginTop: 10,
      padding: 10,
      width: 280,
      backgroundColor: '#fff',
      fontSize: 16,
      borderRadius: 5
    },
    botao: {
      width: 100,
      height: 42,
      backgroundColor: '#9A8100',
      marginTop:20,
      borderRadius: 7,
      justifyContent: 'center',
     alignItems: 'center',
    },
    botaoText: {
      fontSize: 16,
      color: '#fff'
    },
    ButtonCreate: {
      color: '#FFF',
      marginTop: 14,
    }  
  });
  
  
  export default Login