import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Row,
  ButtonIcon,
  ButtonPrimary,
  ButtonSecondary,
  ButtonPrimaryIcon,
} from '../../components/atoms';
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
      <View style={styles.container}>
        <ButtonPrimary onPress={() => null} title='Hello' buttonStyle={styles.button} />
        <ButtonPrimary
          onPress={() => null}
          title='Hello disabled'
          buttonStyle={styles.button}
          isDisabled
        />
        <ButtonPrimary onPress={() => null} title='Hello custom' buttonStyle={styles.btn} />

        <ButtonSecondary onPress={() => null} title='Hello' buttonStyle={styles.button} />
        <ButtonSecondary
          onPress={() => null}
          title='Hello disabled'
          buttonStyle={styles.button}
          isDisabled
        />

        <View style={styles.iconsContainer}>
          <ButtonIcon
            onPress={() => null}
            iconName='leftArrow'
            iconWidth={24}
            iconHeight={24}
            buttonStyle={styles.button}
          />
          <ButtonIcon
            onPress={() => null}
            iconName='printer'
            iconWidth={24}
            iconHeight={24}
            iconColor='yellow'
            buttonStyle={styles.button}
            isDisabled
          />
          <ButtonIcon
            onPress={() => null}
            iconName='leftArrow'
            iconWidth={24}
            iconHeight={24}
            iconColor='white'
            buttonStyle={styles.button}
          />
        </View>
        <ButtonPrimaryIcon
          title='Save information'
          onPress={() => null}
          iconName='leftArrow'
          iconWidth={20}
          iconHeight={20}
          iconColor={styles.iconButtonText.color}
          buttonStyle={styles.button}
          titleStyle={styles.iconButtonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
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
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  button: {
    marginBottom: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  iconButtonText: {
    color: 'yellow',
  },
});

export default HomeScreen;
