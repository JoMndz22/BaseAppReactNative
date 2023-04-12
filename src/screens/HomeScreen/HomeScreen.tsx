import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Row, ButtonIcon, P } from '../../components/atoms';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/MyStacks/Home/HomeStacks';
import { Header } from '../../components/templates';
import { GlobalStyles } from '../../assets/css';

export type StackNavigation = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation<StackNavigation>();

  return (
    <View>
      <Header />
      <Row>
        <Text>HomeScreen.tsx</Text>
      </Row>
      <TouchableOpacity onPress={() => navigation.navigate('InternalScreen')} style={styles.btn}>
        <Text style={styles.textWhite}>Go to internal screen</Text>
      </TouchableOpacity>
      <Button onPress={() => console.log('OKKKK22')} background='red'>
        <Text style={styles.text}>HOLAAA</Text>
      </Button>
      <ButtonIcon onPress={() => console.log('!!!')} background={GlobalStyles.colorYellow.color}>
        <Text style={styles.text}>HOLAAA</Text>
        <P>ICON</P>
      </ButtonIcon>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: GlobalStyles.colorRed.color,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
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
      width: 0,
    },
    shadowOpacity: 0.17,
  },
  text: {
    color: 'white',
  },
  textWhite: {
    color: GlobalStyles.textWhite.color,
  },
});

export default HomeScreen;
