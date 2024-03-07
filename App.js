import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './LoginScreen';
import HomeScreenUser from './Screens/User/HomeScreen';
import HomeScreenAdmin from './Screens/Admin/HomeScreen';
import HomeScreenTech from './Screens/Technical/HomeScreen';
import DrawerContent from './Screens/User/DrawerContent';
import CreateReportScreen from './Screens/User/CreateReportScreen';
import VisualizeReportScreen from './Screens/User/VisualizeReportScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} initialRouteName="Cerrar Sesión">
        <Drawer.Screen name="Cerrar Sesión" component={LoginScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="HomeScreenUser" component={HomeScreenUser} options={{ title: '' }}/>
        <Drawer.Screen name="HomeScreenAdmin" component={HomeScreenAdmin} options={{ title: '' }}/>
        <Drawer.Screen name="HomeScreenTech" component={HomeScreenTech} options={{ title: '' }}/>
        <Drawer.Screen name="CreateReportScreen" component={CreateReportScreen} options={{ title: '' }}/>
        <Drawer.Screen name="VisualizeReportScreen" component={VisualizeReportScreen} options={{ title: '' }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
