import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import generalStyles from "../../styles/GeneralStyles"
import logo from "../../../assets/accenture.png"

const LoginScreen = ({ navigation, route }) => {
    const [text, setText] = useState('');
    return (
        <View style={generalStyles.container}>
            <Image source={{uri: "https://www.accenture.com/t20180820T081710Z__w__/ca-en/_acnmedia/Accenture/Dev/Redesign/Acc_Logo_Black_Purple_RGB.png"}} style={styles.logo}/>
            <Text>Login Screen</Text>
            <TextInput style={styles.input}
                value={text}
                onChangeText={setText}
            />
            <Text>{text}</Text>
            <Button
                title="Go To Profile"
                onPress={() =>
                    navigation.navigate('Profile', {
                        user: text,
                    })
                }
            />

        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#ffffff"
    },
    logo: {
        width: 200,
        height: 100,
        resizeMode: "center",
    }
});

export default LoginScreen;