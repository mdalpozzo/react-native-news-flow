import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Headline: {
        backgroundColor: '#F9C5FF',
        flex: 3,
        // ios
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        // android
        elevation: 5,
    },
    Stories: {
        backgroundColor: '#eee',
        flex: 7,
    },
});

export default styles;