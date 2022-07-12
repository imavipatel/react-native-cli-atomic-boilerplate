import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';

type RootStackParamList = {
  LoginScreen: undefined;
  ProfileScreen: { id: number; firstName: string; lastName: string };
};

export type StackNativeScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Login Screen' }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ title: 'Profile Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
