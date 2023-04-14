import { View } from 'react-native';
import { Block, P } from '../../../atoms';
import { GlobalStyles } from '../../../../assets/';
import { Nz } from '../../../../functions';
import { styles } from '../CardUser.css';
import { CardUserProps } from '../CardUser.types';

const HeaderCardUser = ({ secuencia, local, tipoUsuario, tipoServicio }: CardUserProps) => {
  return (
    <Block
      style={[GlobalStyles.flexRow, GlobalStyles.jContentSpaceB, { backgroundColor: 'white' }]}
    >
      <View>
        <P type='bold' fsize={Nz(13)}>
          {secuencia}
        </P>
      </View>
      <View style={[GlobalStyles.flexRow, styles.colGap6]}>
        <P fsize={Nz(11)}>{local}</P>
        <P fsize={Nz(11)}>{tipoUsuario}</P>
        <P fsize={Nz(11)}>{tipoServicio}</P>
      </View>
    </Block>
  );
};

export default HeaderCardUser;
