import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Nz } from '../../../functions';

//style?: StyleProp<ViewStyle> | undefined;

interface RowProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
}

const Row = ({ children, style }: RowProps): JSX.Element => {
  return <View style={[styles.row, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    columnGap: Nz(15),
    marginBottom: Nz(15),
  },
});

export default Row;
