import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'
import indicatorclDB from '../api/IndicatorclDB';
import Chart from '../componentes/Chart';
import Loading from '../componentes/Loading';
import styles from './styles/info';
import { screenProps } from '../interfaces/interfaces';

export const InfoScreen = (props: screenProps) => {

    console.log('info screen', JSON.stringify(props));
    

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
                <Loading/>
            ) :  <Chart values={values} dates={dates}/>
            }
           
        </>
    )
}
