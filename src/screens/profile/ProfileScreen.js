import React from "react";
import { Button, Text, View } from "react-native";
import generalStyles from "../../styles/GeneralStyles";

const ProfileScreen = ({ navigation, route }) => {
    return (
        <View style={generalStyles.container}>
            <Text>Profile Screen</Text>
            <Text>This is {route.params.name} page</Text>
            <Button
                title="Go To Home"
                onPress={() => 
                    navigation.navigate('Home', {idade: 10})
                }
            />
        </View>
    )
}

export default ProfileScreen;