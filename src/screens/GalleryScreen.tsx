import React from 'react';
import { View,Text,Button } from 'react-native';

export default function GalleryScreen({navigation}:any) {
  return (
    <View style={{flex:1,backgroundColor:'blue',alignItems:'center',justifyContent:'center'}}>
        <Text>Gallery Screen</Text>
        <Button title="Go to Home" onPress={()=>navigation.navigate('Home')} />
    </View>
  );
}