import React from 'react';
import { StyleSheet, View } from "react-native";

const Row = ({children}: React.PropsWithChildren): JSX.Element => {
    return <View style={styles.row}>{children}</View>
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        columnGap: 15,
    }
})

export default Row;