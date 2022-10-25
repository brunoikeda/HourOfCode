import React from "react";
import { Button, Text, View } from "react-native";
import generalStyles from "../../styles/GeneralStyles";

const ProfileScreen = ({ navigation, route }) => {
    let user = "";
    if (route.params){
        user = route.params.user;
    }else{
        user = "No User";
    }
    return (
        <View style={generalStyles.container}>
            <Text>Profile Screen</Text>
            <Text>{user}</Text>
            <Button
                title="Go To Login"
                onPress={() =>
                    navigation.navigate('Login')
                }
            />
        </View>
    )
}

export default ProfileScreen;