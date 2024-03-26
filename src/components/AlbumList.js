import React from "react";
import { Text, FlatList, SectionList, StyleSheet } from "react-native";
import AlbumDetail from "./AlbumDetail";

import sections from "../json/albums.json";
const Albumlist = ({navigation}) => {
  const renderSectionHeader = ({section}) => (
    <>
      <Text style={styles.sectionHeader}>{section.title}</Text>
      {section.horizontal ? (
        <FlatList
          horizontal={true}
          data={section.data}
          renderItem={({ item }) => <AlbumDetail album={item} navigation={navigation}/>}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ item => item.title }
        />
      ) : null}
    </>
  );
  const renderItem = ({ item, section }) => {
    if (section.horizontal) {
      return null;
    }
    return <AlbumDetail album={item} />
  };

  return (
    <SectionList 
      sections={sections}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={ item => item.title }
    />
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 24,
    fontFamily:"Roboto",
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 10,
    lineHeight: 28,
    textAlign: 'left',
    fontWeight:"bold"
  },
})

export default Albumlist;
