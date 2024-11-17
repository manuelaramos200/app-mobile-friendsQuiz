import { StyleSheet, Text, View } from "react-native";

export default function Logo() {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.primario}>F </Text>
                <View style={[styles.dot, { backgroundColor: '#B22222' }]} />
                <Text style={styles.primario}>R </Text>
                <View style={[styles.dot, { backgroundColor: 'blue' }]} />
                <Text style={styles.primario}>I </Text>
                <View style={[styles.dot, { backgroundColor: 'yellow' }]} />
                <Text style={styles.primario}>E </Text>
                <View style={[styles.dot, { backgroundColor: 'green' }]} />
                <Text style={styles.primario}>N </Text>
                <View style={[styles.dot, { backgroundColor: 'purple' }]} />
                <Text style={styles.primario}>D </Text>
                <View style={[styles.dot, { backgroundColor: 'orange' }]} />
                <Text style={styles.primario}>S </Text>
            </View>
            <Text style={styles.segundario}>quiz</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    primario: {
        fontFamily: 'GABRWFFR',
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 3,
    },
    segundario: {
        fontFamily: 'GABRWFFR',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginTop: 5,
    },
});
