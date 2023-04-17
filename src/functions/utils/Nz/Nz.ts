import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Nz = (size: number) => {
  var wph = wp('100%');
  var w = wph * (size / 100) * 0.25;
  return w;
};

export default Nz;
