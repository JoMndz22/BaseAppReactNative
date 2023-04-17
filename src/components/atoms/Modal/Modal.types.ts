import { ReactNode } from 'react';
import { SvgName } from '../Svg';

export default interface ModalProps {
  title: string;
  children: ReactNode;
  visible: boolean;
  iconHeaderName: SvgName | 'logo';
  iconColor: string;
  onClose: () => void;
  primaryText: string;
  onSecondaryPress?: () => void;
  onPrimaryPress?: () => void;
  secondaryText?: string;
  hasTwoButtons?: boolean;
}
