import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ImagePickerScreen from "./screens/ImagePickerScreen";
import LocationScreen from "./screens/LocationScreen";
import HomeDrawerNavigator from './screens/HomeDrawerNavigator';
import HomeScreenContent from './screens/HomeScreenContent';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          /> 

        <Stack.Screen
          name="Image"
          component={ImagePickerScreen}
        />  
        <Stack.Screen
          name="Location"
          component={LocationScreen}
        /> 
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

// import { createDrawerNavigator } from "@react-navigation/drawer";
// const Drawer = createDrawerNavigator();

// export default function App() {
//   return(

// <Drawer.Navigator initialRouteName="Home">
// <Drawer.Screen name="Home" component={HomeScreen} />
// <Drawer.Screen name="Image Upload" component={ImagePickerScreen} />
// <Drawer.Screen name="Location" component={LocationScreen} />
// </Drawer.Navigator>
//   );
// }