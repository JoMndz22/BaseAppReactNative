import { ReactNode } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native/types';

export interface ButtonPrimaryProps {
  title: string;
  onPress: () => void;
  isDisabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

export interface ButtonSecondaryProps {
  title: string;
  onPress: () => void;
  isDisabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

export interface ButtonIconProps {
  onPress: () => void;
  children: ReactNode;
  isDisabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
}
