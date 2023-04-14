import { StyleSheet } from 'react-native';
import { Nz } from '../../../functions';

export const styles = StyleSheet.create({
  boxCard: {
    padding: Nz(20),
  },
  colGap6: {
    columnGap: Nz(6),
  },
  borderBottom: {
    borderBottomWidth: Nz(2),
    borderBottomColor: '#CCCCCC',
    paddingBottom: Nz(10),
  },
  borderRight: {
    borderRightWidth: Nz(2),
    borderRightColor: '#CCCCCC',
  },
});
