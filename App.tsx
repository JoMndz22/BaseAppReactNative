import { SafeAreaView, StyleSheet } from 'react-native';
import { Navigation } from './src/navigation';

function App(): JSX.Element {

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <Navigation/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backgroundStyle:{
        //backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1,
    },
    container: {
        paddingHorizontal: 15,
        rowGap: 15,
        backgroundColor: 'red'
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
