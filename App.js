/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import ScreenA from './src/components/ScreenA';
import ScreenB from './src/components/ScreenB';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { faDollar } from '@fortawesome/free-solid-svg-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/components/Home';
import useAzureStore from './src/stores/AzureStore';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



function SupportRequestsScreen(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Support requests Screen</Text>
    </View>
  )
}

function SettingsScreen(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
    </View>
  )
}

function BillingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Billing</Text>
    </View>
  );
}

function HelpScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Help & Feedback</Text>
    </View>
  );
}

const DrawerComponent = (props) =>{
  return(
    <DrawerContentScrollView {...props}>
    <View style={styles.profileContainer}>
      <Image
        source={{ uri: 'https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg' }} // Replace with your profile picture URL
        style={styles.profileImage}
      />
      <Text style={styles.profileName}>Vipul Malhotra</Text>
      <Text style={styles.email}>vipulm124@gmail.com</Text>
    </View>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
  )
}

function App(){

  useEffect(() => {
    // Fetch data and update both stores
    const fetchData = async () => {
      const {fetchItems} = useAzureStore.getState()
      await fetchItems();
      const {resource_groups} = useAzureStore.getState();
      console.log(resource_groups[0].items)
      // await fetchItemsService();
    };
    fetchData();
  }, []);

  
  return (
   <NavigationContainer>

    <Drawer.Navigator
    initialRouteName='Home'
    drawerPosition='left'
    drawerContent={(props)=> <DrawerComponent {...props}/>}>
      <Drawer.Screen name='Resource Groups' component={Home}/>
      <Drawer.Screen name='Billing' component={BillingScreen}/>
      <Drawer.Screen name='Settings' component={SettingsScreen}/>
      <Drawer.Screen name='Help & Feedback' component={HelpScreen}/>
      <Drawer.Screen name='Support requests' component={SupportRequestsScreen}/>


    </Drawer.Navigator>
   </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0078D4', // Microsoft Azure blue color
    height: 60,
    paddingHorizontal: 10,
  },
  menuIcon: {
    fontSize: 24,
    color: '#fff',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userSectionContainer:{
    marginTop:25
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default App;
