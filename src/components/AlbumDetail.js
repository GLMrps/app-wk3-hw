import React from "react";
import { StyleSheet, Pressable, Text, View, Image} from "react-native";
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stars from "./star.js";

const AlbumDetail = ({ album, navigation}) => {
  return (
    <View style={{flexDirection: 'column'}}>
     <View style={styles.cardContainerStyle}>
       <View style={styles.cardSectionStyle}>
       <Pressable
            onPress={() => navigation.navigate('Detail', album)}
          >
         <Image
           style={styles.imageStyle}
           source={{uri: album.image}}
         />
         </Pressable>
         {album.star > 0 ? <Stars num={album.star} style={styles.stars} /> : null}
        <View style={styles.headerContainerStyle}>
       <Text style={styles.headerTitleStyle}>{album.title}</Text>
       <Text style={styles.headerContentStyle}>{album.artist}</Text>
     </View>  
       </View> 
    
     </View>  
    
   </View>
 )};
const styles = StyleSheet.create({
 cardContainerStyle: {
   elevation: 1,
   marginLeft: 5,
   marginRight: 5,
   marginTop: 10
 },
 headerContainerStyle: {
   flexDirection: "column",
   justifyContent: "space-around",
   marginTop:10,
   width: 140,
   backgroundColor:"#fff"
 },
 stars:{
  marginTop:50,
  marginBottom:100
},
 headerTitleStyle: {
   fontSize: 16,
   fontWeight: 'bold',
 },
 headerContentStyle: {
   fontSize: 12,
   fontWeight: '300',
   color: "#222",
   width: '100%'
 },
 cardSectionStyle: {
   padding: 0,
   backgroundColor: "#fff",
   borderColor: "#ddd",
   borderBottomWidth: 1
 },
 imageStyle: {
   height: 200,
   width: 140,
   marginBottom:10

   
 },
 headerContentStyle:{
  marginTop:10
 }
});
export default AlbumDetail;
