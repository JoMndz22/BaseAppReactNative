import { StyleSheet, View } from 'react-native';
import { CardUser } from '../../components/organisms';
import { Row } from '../../components/atoms';
import { Nz } from '../../functions';

const InternalScreen = (): JSX.Element => {
  return (
    <View style={styles.flex}>
      <Row>
        <CardUser
          id='15479'
          direccion='Colonia Buenos Aires 3, Diagonal Centroamérica, Avenida Alvarado, contiguo al Ministerio de Hacienda'
          factura={null}
          geo={false}
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
          direccion='Colonia Buenos Aires 3, Diagonal Centroamérica, Avenida Alvarado, contiguo al Ministerio de Hacienda'
          factura={true}
          geo={false}
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
    paddingHorizontal: Nz(20),
    paddingVertical: Nz(25),
  },
});
export default InternalScreen;
