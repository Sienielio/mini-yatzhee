import React, { useEffect } from "react";
import { Text, View } from "react-native";
import styles from "../style/style";

/* useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
        getScoreboardData();
    });
    return unsubscribe; }, [navigation]); */

export default Header = () => {
    return (
        <View>
            <Text>
                Scoreboard will be here.
            </Text>
        </View>
    )
}