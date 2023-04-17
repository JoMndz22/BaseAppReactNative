import { View } from 'react-native';
import { Block, P } from '../../../atoms';
import { Colors, GlobalStyles } from '../../../../assets/';
import { styles } from '../CardUser.css';
import { Nz } from '../../../../functions';
import { CardUser } from '../CardUser.types';

const BodyCardUser = ({ medidor, numeroCuenta, direccion }: CardUser) => {
  return (
    <Block>
      <Block style={[GlobalStyles.flexRow]}>
        <View style={[GlobalStyles.flexGrow1, styles.borderRight]}>
          <P align='center' type='fit' style={styles.h18}>
            No. Medidor
          </P>
          <P align='center' type='bold' fontSize={Nz(20)} color={Colors.blueSolid1[0]}>
            {medidor}
          </P>
        </View>
        <View style={[GlobalStyles.flexGrow1]}>
          <P align='center' type='fit' style={styles.h18}>
            No. Cuenta
          </P>
          <P align='center' type='bold' fontSize={Nz(20)} color={Colors.blueSolid1[0]}>
            {numeroCuenta}
          </P>
        </View>
      </Block>
      <View style={styles.borderBottom}>
        <P align='center' fontSize={Nz(12)}>
          {direccion}
        </P>
      </View>
    </Block>
  );
};

export default BodyCardUser;
