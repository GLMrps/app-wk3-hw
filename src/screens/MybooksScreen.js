import React from 'react';
import { View } from 'react-native';
import { Text } from "@gluestack-ui/themed";

const MybooksScreen = () => {
    return (
    <View style={{flex: 1}}>
        <Text fontSize={30}>
            My books.
        </Text>              
    </View>
    );
}

export default MybooksScreen;