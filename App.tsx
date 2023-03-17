import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    useColorScheme,
    View
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Row} from './src/components/atoms';

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <ScrollView contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}
                contentContainerStyle={styles.container}>
                <Row>
                    <View style={styles.box}/>
                    <View style={styles.box}/>
                    <View style={styles.box}/>
                </Row>
                <Row>
                    <View style={styles.box}/>
                </Row>
                <Row>
                    <View style={styles.box}/>
                    <View style={styles.box}/>
                </Row>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        rowGap: 15,
        backgroundColor:'red'
    },
    box: {
        flexGrow: 1,
        height: 100,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowRadius: 10,
        borderRadius: 10,
        shadowOffset: {
            height: 10,
            width: 0
        },
        shadowOpacity: 0.17
    }
});

export default App;
