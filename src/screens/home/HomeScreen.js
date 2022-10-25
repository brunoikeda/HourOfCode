import React from "react";
import { Button, Text, View } from "react-native";
import generalStyles from "../../styles/GeneralStyles";

const HomeScreen = ({ navigation, route }) => {
    return (
        <View style={generalStyles.container}>
            <Text>Home Screen</Text>
            {route.params ?
                <Text>This is {route.params.idade} idade</Text>
                :
                <Text>Sem idade</Text>
            }
            <Button
                title="Go To Profile"
                onPress={() =>
                    navigation.navigate('Profile', { name: "Home Name" })
                }
            />
        </View>
    )
}

export default HomeScreen;