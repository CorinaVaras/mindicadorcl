import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import moment from 'moment'
import { ListItem } from 'react-native-elements';


export const InfoScreen = (props: any) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

    const data = props.route.params.item;
    const dataValues = props.route.params.dataIndicators;
    console.log('datavalues: ', dataValues);
    
    props.navigation.setOptions({title: data.nombre});

   
    return (
        <View>
            <Text style={styles.valor}>{`$ ${data.valor}`}</Text>
            <View style={styles.container}>
                <Text style={styles.textStyle}>Nombre</Text>
                <Text style={[styles.dataStyle, styles.textStyle]}>{data.nombre}</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.textStyle}>Fecha</Text>
                <Text style={[styles.dataStyle, styles.textStyle]}>{moment(data.fecha).format('L')}</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.textStyle}>Unidad de medida</Text>
                <Text style={[styles.dataStyle, styles.textStyle]}>{data.unidad_medida}</Text>
            </View>
            {/* <ScrollView>
            {
                dataValues &&
                dataValues.map((value: any, i: any) => (
                    <ListItem key={i} bottomDivider>
                        <ListItem.Content>
                        <ListItem.Title >{value.valor}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </ScrollView>    */}
        </View>   

    
    )
}

const styles = StyleSheet.create({
    valor: {
        fontSize: 30,
        fontWeight: '500',
        color: '#115ca6',
        textAlign: 'center',
        width: '100%',
        marginVertical: 12
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