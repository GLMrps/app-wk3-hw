import React from 'react';
import { Linking, StyleSheet } from 'react-native';
import { HStack, Center, ScrollView, Box, Text, Heading, Image, Button, ButtonText, View } from "@gluestack-ui/themed";
import Stars from '../components/star.js';
const DetailScreen = ({ route }) => {
  const { title, 
    artist,
    price,
    url,
    star,
    image,
    description
  } = route.params;
  return (
    <ScrollView style={{backgroundColor:"#fff"}}>
  <View>
    <Center>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
        </Center>
      </View>
      <View style={styles.cardContainerStyle}>
        <Text style={styles.discountStyle} >{title}</Text>
        <Text style={styles.priceStyle} >{artist}</Text>
        <HStack style={styles.star}>
              <Stars num={star} />
              <Text>{`${star}`}.0/5.0</Text>
            </HStack>
          <Text style={styles.descriptionStyle}>{'\t'}{description}</Text>
          <Center>
          <Button style={styles.botton}
          onPress={() => Linking.openURL(url)}
          title="Buy Now !">
          <Text style={styles.buyStyle}>Buy Now for $46.99</Text>
        </Button>
        </Center>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  imageStyle: {
    height: 300,
    width:210,
    marginTop:50
  },
  star: {
    marginLeft: 120,
    marginTop:10,
    marginBottom:20
  },
  cardContainerStyle: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10
  },
  discountStyle: {
    color: '#131313',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily:"Roboto"
  },
  priceStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
    color:"#666666"

  },
  descriptionStyle:{
    lineHeight: 30,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom:40
  },
  buyStyle:{
    color:'#fff'
  },
  botton:{
    backgroundColor:'#6200EE',
    width:190,
  }

});


export default DetailScreen;
