import React from 'react';
import { View,Text,Button } from 'react-native';

export default function HomeScreen({navigation}:any) {
  return (
    <View style={{flex:1,backgroundColor:'green',alignItems:'center',justifyContent:'center'}}>
        <Text>Home Screen</Text>
        <Button title="Go to Gallery" onPress={() => navigation.navigate('Gallery')} />
    </View>
  );
}