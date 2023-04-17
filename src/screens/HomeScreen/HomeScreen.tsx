import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  ButtonPrimary,
  ButtonPrimaryIcon,
  ButtonSecondary,
  Modal,
  Row,
} from '../../components/atoms';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/MyStacks/Home/HomeStacks';
import { Header } from '../../components/templates';
import { GlobalStyles } from '../../assets/';

export type StackNavigation = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = (): JSX.Element => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation<StackNavigation>();

  const onClose = () => setVisible(false);

  return (
    <View>
      <Header />
      <Row>
        <Text>HomeScreen.tsx</Text>
      </Row>
      <TouchableOpacity onPress={() => navigation.navigate('InternalScreen')} style={styles.btn}>
        <Text style={styles.textWhite}>Go to internal screen</Text>
      </TouchableOpacity>
      <ButtonPrimary onPress={() => null} title='Hello' buttonStyle={styles.button} />
      <ButtonSecondary onPress={() => null} title='Hello' buttonStyle={styles.button} />
      <ButtonSecondary
        onPress={() => null}
        title='Hello disabled'
        buttonStyle={styles.button}
        isDisabled
      />
      <ButtonPrimaryIcon
        title='Save information'
        onPress={() => setVisible(true)}
        iconName='rightArrow'
        iconWidth={20}
        iconHeight={20}
        iconColor={styles.iconButtonText.color}
        buttonStyle={styles.button}
        titleStyle={styles.iconButtonText}
      />
      <Modal
        title='Registro de avance'
        secondaryText='Cancelar'
        primaryText='Aceptar'
        iconHeaderName='logo'
        iconColor='yellow'
        visible={visible}
        onClose={onClose}
        onSecondaryPress={onClose}
        onPrimaryPress={onClose}
        hasTwoButtons
      >
        <View>
          <Text>¿Deseas cambiar el estado a entregado?</Text>
        </View>
      </Modal>
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
