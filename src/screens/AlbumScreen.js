import React from "react";
import { Box } from "@gluestack-ui/themed";
import { View } from "react-native";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";
import AlbumDetail from "../components/AlbumDetail";
const AlbumScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1, backgroundColor:"#fff"}}>
      <AlbumList 

        navigation={navigation}
      />
    </View>
  );
};

export default AlbumScreen;
