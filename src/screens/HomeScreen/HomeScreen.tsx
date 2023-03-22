import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Row } from '../../components/atoms';


const HomeScreen = (): JSX.Element => {
    const navigation = useNavigation()

    return(
        <View>
            <Row>
                <Text>HomeScreen.tsx</Text>
            </Row>
            <TouchableOpacity
                onPress={()=> navigation.navigate("Internal Screen") }
                style={styles.btn}
            >
                <Text>Go to internal screen</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'#dedede',
        padding: 10,
        alignItems:'center',
        marginTop: 20
    }
})

export default HomeScreen;