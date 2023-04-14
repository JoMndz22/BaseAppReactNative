import { View } from 'react-native';
import { P } from '../../atoms';

import { CardUserProps } from './cardUser.types';

import { styles } from './cardUser.css';
import { Colors, GlobalStyles } from '../../../assets/css';
import { Nz } from '../../../functions';

const CardUser = (props: CardUserProps) => {
  const {
    direccion,
    //factura,
    //geo,
    //id,
    local,
    medidor,
    //metrosCubicos,
    numeroCuenta,
    //ruta,
    secuencia,
    tipoServicio,
    tipoUsuario,
  } = props;

  return (
    <View style={[GlobalStyles.box, styles.boxCard]}>
      {/* <HeaderCard> */}
      <View
        style={[GlobalStyles.flexRow, GlobalStyles.jContentSpaceB, { backgroundColor: 'green' }]}
      >
        <View>
          <P type='bold'>{secuencia}</P>
        </View>
        <View style={[GlobalStyles.flexRow, styles.colGap6]}>
          <P>{local}</P>
          <P>{tipoUsuario}</P>
          <P>{tipoServicio}</P>
        </View>
      </View>
      {/* <BodyCard> */}
      <View style={{ backgroundColor: 'white' }}>
        <View style={[GlobalStyles.flexRow]}>
          <View style={[GlobalStyles.flexGrow1, styles.borderRight]}>
            <P align='center' type='fit' style={{ height: 18 }}>
              No. Medidor
            </P>
            <P align='center' type='bold' fsize={Nz(20)} color={Colors.blueSolid1[0]}>
              {medidor}
            </P>
          </View>
          <View style={[GlobalStyles.flexGrow1]}>
            <P align='center' type='fit' style={{ height: 18 }}>
              No. Medidor
            </P>
            <P align='center' type='bold' fsize={Nz(20)} color={Colors.blueSolid1[0]}>
              {numeroCuenta}
            </P>
          </View>
        </View>
        <View style={styles.borderBottom}>
          <P align='center' fsize={Nz(12)}>
            {direccion}
          </P>
        </View>
      </View>
    </View>
  );
};

export default CardUser;
