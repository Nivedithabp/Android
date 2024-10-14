import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import ImagePickerScreen from "./ImagePickerScreen";
import LocationScreen from "./LocationScreen";

// Define types for your drawer navigation
export type DrawerParamList = {
  Home: undefined;
  "Image Upload": undefined;
  Location: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const HomeDrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Image Upload" component={ImagePickerScreen} />
      <Drawer.Screen name="Location" component={LocationScreen} />
    </Drawer.Navigator>
  );
};

export default HomeDrawerNavigator;
