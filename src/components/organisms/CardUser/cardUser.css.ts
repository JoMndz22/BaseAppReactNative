import { StyleSheet } from 'react-native';
import { Nz } from '../../../functions';

export const styles = StyleSheet.create({
  boxCard: {
    paddingVertical: Nz(8),
    paddingHorizontal: Nz(12),
    borderColor: '#baa3a352',
    borderWidth: Nz(1),
    marginBottom: Nz(15),
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
  h18: {
    height: 18,
  },
});
