import { StyleSheet, View } from 'react-native';
import { P } from '../../atoms';

const Header = () => {
  return (
    <View style={styles.container}>
      <P color={'red'} fsize={20}>
        Header ANDA
      </P>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
});

export default Header;
