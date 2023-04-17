import { Modal as RNModal, Text, TouchableOpacity, View } from 'react-native';
import { ButtonPrimary, ButtonSecondary } from '../Button';
import { Svg } from '../Svg';
import LogoSvg from '../../../assets/images/svg/logo.svg';
import ModalProps from './Modal.types';
import { styles } from './Modal.styles';

export default function Modal({
  title,
  visible,
  children,
  onClose,
  iconColor,
  iconHeaderName,
  hasTwoButtons,
  primaryText,
  secondaryText = '',
  onPrimaryPress = () => null,
  onSecondaryPress = () => null,
}: ModalProps) {
  return (
    <RNModal animationType='slide' transparent visible={visible} onRequestClose={() => null}>
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            {iconHeaderName === 'logo' ? (
              <LogoSvg height={20} width={17} />
            ) : (
              <Svg name={iconHeaderName} width={20} height={17} color={iconColor} />
            )}
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onClose}>
              <Svg name='close' width={20} height={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.child}>{children}</View>
          {hasTwoButtons ? (
            <View style={styles.firstFooter}>
              <View style={styles.buttonContainer}>
                <ButtonSecondary
                  title={secondaryText}
                  onPress={onSecondaryPress}
                  buttonStyle={styles.button}
                />
              </View>
              <View style={styles.divider} />
              <View style={styles.buttonContainer}>
                <ButtonPrimary
                  title={primaryText}
                  onPress={onPrimaryPress}
                  buttonStyle={styles.button}
                />
              </View>
            </View>
          ) : (
            <View style={styles.secondFooter}>
              <ButtonPrimary title={primaryText} onPress={() => null} buttonStyle={styles.button} />
            </View>
          )}
        </View>
      </View>
    </RNModal>
  );
}
