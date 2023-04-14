import { StyleSheet, Text, View } from 'react-native';
import { CardUser } from '../../components/organisms';
import { Row } from '../../components/atoms';

const InternalScreen = (): JSX.Element => {
  return (
    <View style={styles.flex}>
      <Text>InternalScreen.tsx</Text>
      <Row>
        <CardUser
          id='15479'
          direccion='Colonia Buenos Aires 3, Diagonal Centroamérica, Avenida 
        Alvarado, contiguo al Ministerio de Hacienda'
          factura={null}
          geo={true}
          local='DOMICILIAR'
          medidor='117089244'
          metrosCubicos='091282'
          numeroCuenta='780443'
          ruta='13'
          secuencia='1025'
          tipoServicio='PART./1'
          tipoUsuario='NORMAL/H/S'
        />
      </Row>
      <Row>
        <CardUser
          id='15479'
          direccion='Colonia Buenos Aires 3, Diagonal Centroamérica, Avenida 
        Alvarado, contiguo al Ministerio de Hacienda'
          factura={null}
          geo={true}
          local='COMERCIAL'
          medidor='117089244'
          metrosCubicos='091282'
          numeroCuenta='780443'
          ruta='13'
          secuencia='1026'
          tipoServicio='PART./0'
          tipoUsuario='NORMAL/H/S'
        />
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
export default InternalScreen;
