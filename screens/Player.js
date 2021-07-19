import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default class Player extends React.Component {
    render () {
        return (
            <SafeAreaView>
                <Text>Player</Text>
            </SafeAreaView>
        )
    }
}

const Styles = StyleSheet.create ({
    text: {
        textAlign: 'center'
    }
})