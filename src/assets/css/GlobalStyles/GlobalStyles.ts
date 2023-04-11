import { StyleSheet } from 'react-native'
import { Colors } from '../index';

const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    welcomeText: {
        fontSize: 20,
        color: 'red'
    },
    colorRed: {
        color: Colors.blue[0]
    },
    colorYellow: {
        color: Colors.yellow[0]
    }
});
export default GlobalStyles;