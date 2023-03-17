import { StyleSheet, View } from "react-native/types";

const Row = ({children}: React.PropsWithChildren): JSX.Element => {
    return <View style={styles.row}>{children}</View>
}

const styles = StyleSheet.create({
    row:{
        flexGrow: 1,
        height: 100,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowRadius: 10,
        borderRadius: 10,
        shadowOffset: {height:10, width:0},
        shadowOpacity: 0.17
    }
})

export default Row;