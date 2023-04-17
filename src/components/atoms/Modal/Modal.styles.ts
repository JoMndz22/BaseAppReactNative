import { StyleSheet } from 'react-native';
import { Colors } from '../../../assets/css';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(86, 86, 86, 0.61)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 22,
  },
  modalContent: {
    borderRadius: 10,
    backgroundColor: Colors.white[0],
    width: '100%',
  },
  header: {
    width: '100%',
    height: 47,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(147, 146, 146, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 23,
    paddingRight: 12,
    flexDirection: 'row',
  },
  child: {
    paddingHorizontal: 15,
  },
  title: {
    flex: 1,
    marginLeft: 11,
  },
  firstFooter: {
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    flexDirection: 'row',
  },
  divider: {
    width: 23,
    height: 1,
  },
  secondFooter: {
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    flexDirection: 'row',
  },
  button: {
    height: 50,
    width: '100%',
  },
});
