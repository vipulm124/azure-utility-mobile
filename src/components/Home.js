import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
    TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useAzureStore from '../stores/AzureStore';
import ScreenA from './ScreenA';

export default function Home({navigation}){
    // const {resource_groups} = useAzureStore.getState();
    const resource_groups = useAzureStore((state) => state.resource_groups); // Access the array from the store
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if the array is populated and update loading state
        if (resource_groups.length > 0) {
          setIsLoading(false);
          console.log(resource_groups)
        }
      }, [resource_groups]);

      if (isLoading) {
        return <Text>Loading...</Text>; // Render a loading indicator
      }


      
    return(
        <SafeAreaView>
            {resource_groups.map((item) =>(
            <TouchableOpacity onPress={() => navigation.navigate('ScreenA')} key={item.id}>
            <View style={styles.headerContainer} >
                <View>
                <Text style={styles.text}>{item.name}</Text>

                </View>
                <View>
                <Text style={styles.text}>{item.items.length}</Text>

                </View>
            </View>
            </TouchableOpacity>
            ))}
           

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor:'#0078D4',
      borderWidth:2,
      margin:10,
      height: 60,
      paddingHorizontal: 10,
      backgroundColor:'#FFF'
    },
    text: {
        fontSize: 18
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
    
  });