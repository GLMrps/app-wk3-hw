import React from 'react';
import { Image, View, StyleSheet } from "react-native";

const Stars = ({ num }) => {
  const StarRatingBar = [];
  for (let i = 0; i < num; i++) {
    StarRatingBar.push(<Image
        style={styles.star} 
        source={
            require('../images/Star1.png')
        }
      />)
  }
  for (let i=0; i<5-num; i++) {
    StarRatingBar.push(<Image
        style={styles.star} 
        source={
            require('../images/Star2.png')
        }
      />)
  }
  

  return (
    <View style={{ flexDirection: "row" }}>
      {StarRatingBar}
    </View>
  )
}

const styles = StyleSheet.create({
  star: {
    marginLeft: 1,
    marginRight: 2
  }
})

export default Stars;