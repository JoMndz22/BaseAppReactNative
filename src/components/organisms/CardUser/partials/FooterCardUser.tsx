import { View } from 'react-native';
import { P, PBackground as Bg } from '../../../atoms';
import { CardUserProps } from '../CardUser.types';

import { Colors, GlobalStyles } from '../../../../assets/';
import { styles } from '../CardUser.css';

const FooterCardUser = ({ geo, factura, ruta }: CardUserProps) => {
  return (
    <View style={[GlobalStyles.flexRow, GlobalStyles.jContentSpaceB, { paddingTop: 2 }]}>
      <View>
        <Bg background={geo ? Colors.green[0] : Colors.gray[3]}>
          <P type='bold' color={Colors.white[0]}>
            Geolocalizado
          </P>
        </Bg>
      </View>
      <View>
        <View style={[GlobalStyles.flexRow, styles.colGap6, GlobalStyles.justifyContentEnd]}>
          <Bg background={factura ? Colors.green[0] : Colors.gray[3]}>
            <P type='semibold' color={Colors.white[0]}>
              Ruta: {ruta}
            </P>
          </Bg>
          <Bg background={factura ? Colors.green[0] : Colors.gray[3]}>
            <P type='bold' color={Colors.white[0]}>
              {factura ? 'Entregado' : 'Sin Entrega'}
            </P>
          </Bg>
        </View>
      </View>
    </View>
  );
};

export default FooterCardUser;
