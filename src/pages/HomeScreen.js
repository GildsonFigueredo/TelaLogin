import React, { Component} from 'react'
import { Alert, Text, StyleSheet, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'



export default function HomeScreen (props) {

saiu = () =>{
      //Alert.alert("Tela Autenticada", "Até a próxima!");
      Alert.alert('Finalizado','Até a próxima!')
      props.navigation.navigate('Login')
    } 
       return (
          <View style={styles.container}>
          <Text style={styles.title}>
              Essa tela só pode ser vista por usuários autenticados
           </Text>
                         
                <TouchableOpacity
                style={styles.botao}
                onPress={saiu}
                >
                <Text style={styles.botaoText}>Sair do App</Text> 
               </TouchableOpacity>
               
          </View>
        
       )
    }
 
 const styles = StyleSheet.create({
      container:{
         flex:1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: 'FFFF'
      },
        
      botao: {
            width: 100,
            height: 42,
            backgroundColor: 'red',
            marginTop:20,
            borderRadius: 7,
            justifyContent: 'center',
            alignItems: 'center',
       },
       botaoText: { 
            fontSize: 16,
            fontweight: 'bold',
            color: '#fff'
      },
      title: {
          marginTop: -100,
          padding: 40,
         fontWeight: 'bold',
         fontSize: 20,
        textAlign: 'center',
  },
     
})
