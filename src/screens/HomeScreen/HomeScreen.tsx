import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Row } from '../../components/atoms';
import { ButtonPrimary, ButtonSecondary, ButtonIcon } from '../../components/atoms/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/MyStacks/Home/HomeStacks';
import { Header } from '../../components/templates';
import { GlobalStyles } from '../../assets/css';
import Printer from '../../assets/images/svg/Printer.svg';
import SvgIcon from '../../components/atoms/SvgIcon/SvgIcon';

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
      {/* <Button onPress={() => console.log('OKKKK22')} background='red'>
        <Text style={styles.text}>HOLAAA</Text>
      </Button> */}
      <View style={styles.content}>
        <ButtonPrimary
          title='Iniciar Sesión'
          onPress={() => null}
          buttonStyle={styles.buttonStyle}
        />
        <ButtonPrimary
          title='Iniciar Sesión Iniciar Sesión Iniciar Sesión Iniciar Sesión'
          onPress={() => null}
          buttonStyle={styles.buttonStyle}
          isDisabled
        />
        <ButtonSecondary
          title='Iniciar Sesión'
          onPress={() => null}
          buttonStyle={styles.buttonStyle}
        />
        <ButtonSecondary
          title='Iniciar Sesión Iniciar Sesión Iniciar Sesión Iniciar Sesión'
          onPress={() => null}
          buttonStyle={styles.buttonStyle}
          isDisabled
        />
        <ButtonIcon onPress={() => null} buttonStyle={styles.buttonIconStyle}>
          <Printer />
        </ButtonIcon>
        <ButtonIcon isDisabled onPress={() => null} buttonStyle={styles.buttonIconStyle}>
          <SvgIcon name='printer' color='green' />
        </ButtonIcon>
      </View>
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
  content: {
    marginHorizontal: 21,
    marginVertical: 21,
    alignItems: 'center',
  },
  buttonStyle: {
    height: 50,
    marginBottom: 20,
  },
  buttonIconStyle: {
    width: 73,
    height: 50,
    marginBottom: 20,
  },
});

export default HomeScreen;
