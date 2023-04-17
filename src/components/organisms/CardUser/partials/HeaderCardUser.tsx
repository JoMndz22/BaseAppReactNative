import { View } from 'react-native';
import { Block, P } from '../../../atoms';
import { GlobalStyles } from '../../../../assets/';
import { Nz } from '../../../../functions';
import { styles } from '../CardUser.css';
import { CardUser } from '../CardUser.types';

const HeaderCardUser = ({ secuencia, local, tipoUsuario, tipoServicio }: CardUser) => {
  return (
    <Block
      style={[GlobalStyles.flexRow, GlobalStyles.jContentSpaceB, { backgroundColor: 'white' }]}
    >
      <View>
        <P type='bold' fontSize={Nz(13)}>
          {secuencia}
        </P>
      </View>
      <View style={[GlobalStyles.flexRow, styles.colGap6]}>
        <P fontSize={Nz(11)}>{local}</P>
        <P fontSize={Nz(11)}>{tipoUsuario}</P>
        <P fontSize={Nz(11)}>{tipoServicio}</P>
      </View>
    </Block>
  );
};

export default HeaderCardUser;
