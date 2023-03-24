import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Nz = (size:number) => {
    //var hph = hp('100%');
    var wph = wp('100%');
    var w = (wph * (size / 100)) * 0.25;
    return w;
}

export default Nz