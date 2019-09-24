import { registerRootComponent } from 'expo'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

// 사용자 정의 AppEntry
class Index extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello World</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

registerRootComponent(Index)