import { ScrollView, StyleSheet, View } from 'react-native';
import { CardUser } from '../../components/organisms';
import { Row } from '../../components/atoms';
import { Nz } from '../../functions';
import { CardUser as Card } from '../../components/organisms/CardUser/CardUser.types';

const data = [
  {
    id: '1',
    secuencia: '1025',
    local: 'DOMICILIAR',
    tipoUsuario: 'NORMAL/H/S',
    tipoServicio: 'PART./1',
    medidor: '117089244',
    numeroCuenta: '780443',
    direccion:
      'Colonia Buenos Aires 3, Diagonal Centroamérica, Avenida Alvarado, contiguo al Ministerio de Hacienda',
    geo: true,
    ruta: '13',
    metrosCubicos: '091282',
    factura: null,
  },
  {
    id: '2',
    secuencia: '1026',
    local: 'COMERCIAL',
    tipoUsuario: 'NORMAL/H/S',
    tipoServicio: 'PART./0',
    medidor: '117089244',
    numeroCuenta: '780443',
    direccion:
      'Colonia Buenos Aires, Diagonal Centroamérica, Avenida Alvarado, contiguo al Ministerio de Hacienda',
    geo: false,
    ruta: '13',
    metrosCubicos: '091282',
    factura: true,
  },
  {
    id: '3',
    secuencia: '1026',
    local: 'COMERCIAL',
    tipoUsuario: 'NORMAL/H/S',
    tipoServicio: 'PART./0',
    medidor: '117089244',
    numeroCuenta: '780443',
    direccion:
      'Colonia Buenos Aires, Diagonal Centroamérica, Avenida Alvarado, contiguo al Ministerio de Hacienda',
    geo: true,
    ruta: '13',
    metrosCubicos: '091282',
    factura: true,
  },
  {
    id: '3',
    secuencia: '1026',
    local: 'COMERCIAL',
    tipoUsuario: 'NORMAL/H/S',
    tipoServicio: 'PART./0',
    medidor: '117089244',
    numeroCuenta: '780443',
    direccion:
      'Colonia Buenos Aires, Diagonal Centroamérica, Avenida Alvarado, contiguo al Ministerio de Hacienda',
    geo: false,
    ruta: '13',
    metrosCubicos: '091282',
    factura: null,
  },
  {
    id: '3',
    secuencia: '1026',
    local: 'COMERCIAL',
    tipoUsuario: 'NORMAL/H/S',
    tipoServicio: 'PART./0',
    medidor: '117089244',
    numeroCuenta: '780443',
    direccion:
      'Colonia Buenos Aires, Diagonal Centroamérica, Avenida Alvarado, contiguo al Ministerio de Hacienda',
    geo: false,
    ruta: '13',
    metrosCubicos: '091282',
    factura: null,
  },
];

const InternalScreen = (): JSX.Element => {
  return (
    <ScrollView>
      <View style={styles.flex}>
        <Row style={{ flexDirection: 'column' }}>
          {data?.map((item: Card) => {
            return <CardUser data={item} />;
          })}
        </Row>
      </View>
    </ScrollView>
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
