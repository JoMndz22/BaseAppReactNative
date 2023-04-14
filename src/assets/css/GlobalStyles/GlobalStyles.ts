import { StyleSheet } from 'react-native';
import { Colors } from '../index';

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 20,
    color: 'red',
  },
  colorRed: {
    color: Colors.blueSolid1[0],
  },
  colorYellow: {
    color: Colors.yellow[0],
  },
  textWhite: {
    color: Colors.white[0],
  },
});
export default GlobalStyles;
