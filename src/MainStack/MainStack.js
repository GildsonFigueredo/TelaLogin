import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import HomeScreen from '../pages/HomeScreen';
import CreateUser from '../pages/CreateUser';

const Stack = createNativeStackNavigator();

  function MainStack(){
     return(
       <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} 
          options={{
            headerShown: false, 
          }}/> 
          <Stack.Screen name="HomeScreen" component={HomeScreen} 
          options={{
            headerTintColor: 'black',
            headerTransparent: true,
            title:'Usuário autenticado'
          }}/> 
           <Stack.Screen name='CreateUser' component={CreateUser}
            options={{
                headerTintColor: '#FFF',
                headerTransparent: true,
                title:'Adicionando usuário '
            }} />
        </Stack.Navigator>
    
    );
}
export default MainStack