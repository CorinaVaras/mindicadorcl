import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import moment from 'moment'
import indicatorclDB from '../api/IndicatorclDB';
import Chart from '../componentes/Chart';


export const InfoScreen = (props: any) => {

    const [values, setValues] = useState([]);
    const [dates, setDates] = useState([]);
    const [loading, setLoading] = useState(false);


    const item = props.route.params.item;
    props.navigation.setOptions({ title: item.codigo });

    const getChart = async () => {
        setLoading(true)
        const response: any = await indicatorclDB.get(`/api/${item.codigo}`)
        const { data: { serie = {} } = {} } = response;
        const dates = serie.slice(0, 3).map(({ fecha }: any) => moment(fecha).format('L') ?? "");
        const values = serie.slice(0, 10).map(({ valor }: any) => valor ?? 0);

        setValues(values);
        setDates(dates);
        setLoading(false)
    }

    useEffect(() => {
        getChart()
    }, [])

    return (
        <>
            <View>
                <Text style={styles.valor}>{`$ ${item.valor}`}</Text>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>Nombre</Text>
                    <Text style={[styles.dataStyle, styles.textStyle]}>{item.codigo}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.textStyle}>Fecha</Text>
                    <Text style={[styles.dataStyle, styles.textStyle]}>{moment(item.fecha).format('L')}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.textStyle}>Unidad de medida</Text>
                    <Text style={[styles.dataStyle, styles.textStyle]}>{item.unidad_medida}</Text>
                </View>
            </View>
            { 
            loading ? (
                <ActivityIndicator
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        bottom: 0,
                        left: 0}}
                    color={'#1a7aff'}
                />
            ) :  <Chart values={values} dates={dates}/>
            }
           
        </>
    )
}

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