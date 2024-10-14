import React from 'react';
import HomeDrawerNavigator from './HomeDrawerNavigator';  // Import the drawer navigator

const HomeScreenContent = () => {
  // Render the drawer navigator instead of the usual content
  return <HomeDrawerNavigator />;
};

export default HomeScreenContent;
