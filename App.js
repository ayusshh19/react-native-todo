import * as React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Startpage from './screens/Startpage';
import Loginpage from './screens/Loginpage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import registerNNPushToken from 'native-notify';   

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          
          tabBarStyle:{
            backgroundColor:route.name=='start'?'#fff':'#000'
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Login') {
              iconName = focused ? 'key' : 'key-outline';
            }
            else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }
            else if (route.name === 'Map') {
              iconName = focused ? 'locate' : 'locate-outline';
            }
            else if (route.name === 'start') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          
        })}
        
        >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Login" component={Loginpage} />
        <Tab.Screen name="Map" component={SettingsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
}



export default function App() {
  registerNNPushToken(6621, 'dugLe69bVbq3JAgIgGflRD');
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name='start' component={Startpage} />
        <Stack.Screen name='Login' component={Loginpage}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomtab:{
    backgroundColor:'#000'
  }

});
