import React from 'react'
import { UserContextProvider, useUser } from './components/UserContext'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AuthScreen from './screens/AuthScreen'
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ToDoListScreen from "./screens/ToDoListScreen";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: '#845ee3',
    accent: '#4C2F96',
    text: '#444444'
  },
};

function LoggedInTabs() {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: theme.colors.primary }}
      shifting="true"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="To Do"
        component={ToDoListScreen}
        options={{
          tabBarLabel: 'To Do List',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-list" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Container = () => {
  const { user } = useUser()
  return user ? <LoggedInTabs /> : <AuthScreen />
}

export default function App() {
  return (
    <UserContextProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={"Container"}
              component={Container}
              options={{ title: 'App Logo' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </UserContextProvider>
  )
}