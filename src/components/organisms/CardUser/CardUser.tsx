import { View } from 'react-native';
import { CardUserProps } from './CardUser.types';

import { styles } from './CardUser.css';
import { GlobalStyles } from '../../../assets/';
import { BodyCardUser, FooterCardUser, HeaderCardUser } from './partials';

const CardUser = (props: CardUserProps) => {
  const {
    direccion,
    factura,
    geo,
    local,
    medidor,
    // metrosCubicos,
    numeroCuenta,
    ruta,
    secuencia,
    tipoServicio,
    tipoUsuario,
  } = props;

  return (
    <View style={[GlobalStyles.box, styles.boxCard]}>
      <HeaderCardUser
        secuencia={secuencia}
        local={local}
        tipoUsuario={tipoUsuario}
        tipoServicio={tipoServicio}
      />
      <BodyCardUser medidor={medidor} numeroCuenta={numeroCuenta} direccion={direccion} />

      {/* <FooterCard> */}
      <FooterCardUser geo={geo} factura={factura} ruta={ruta} />
    </View>
  );
};

export default CardUser;
