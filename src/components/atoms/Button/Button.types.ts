import { StyleProp, TextStyle, ViewStyle } from 'react-native/types';
import { SvgName } from '../Svg';

export interface ButtonPrimaryProps {
  title: string;
  onPress: () => void;
  isDisabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

export interface ButtonPrimaryIconProps {
  title: string;
  onPress: () => void;
  iconName: SvgName;
  isDisabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  iconWidth?: number;
  iconHeight?: number;
  iconColor?: string;
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
  iconName: SvgName;
  iconColor?: string;
  iconWidth?: number;
  iconHeight?: number;
  isDisabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
}
