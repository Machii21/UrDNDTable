import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native';

export default class Home extends React.Component {
    render () {
        return (
            <SafeAreaView>
                <Text>Home Screen</Text>
                <Button title="Player" onPress={()=>{this.props.navigation.navigate("Player")}} />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    }
})