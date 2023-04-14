import { StyleSheet } from 'react-native';
import { Colors } from '../Colors';

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
  box: {
    backgroundColor: 'white',
    flexGrow: 1,
    shadowColor: '#000',
    shadowRadius: 10,
    borderRadius: 10,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowOpacity: 0.17,
    elevation: 8,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  jContentSpaceB: {
    justifyContent: 'space-between',
  },
  flexGrow1: {
    flexGrow: 1,
  },
  justifyContentEnd: {
    justifyContent: 'flex-end',
  },
});
export default GlobalStyles;
