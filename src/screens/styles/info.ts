import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    valor: {
        fontSize: 30,
        fontWeight: '500',
        color: '#115ca6',
        textAlign: 'center',
        width: '100%',
        marginVertical: 15
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 30,
        alignItems: 'center',
        marginBottom: 10,
        marginRight: '20%',
        marginLeft: '10%'
    },
    dataStyle: {
        padding: 4,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 6,
        width: '40%',
        textAlign: "right"
    },
    textStyle: {
        color: 'black'
    }
})

export default styles;