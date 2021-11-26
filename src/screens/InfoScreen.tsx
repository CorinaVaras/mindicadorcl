import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import moment from 'moment'
import indicatorclDB from '../api/IndicatorclDB';
import {
    LineChart
} from "react-native-chart-kit";

export const InfoScreen = (props: any) => {

    const [values, setValues] = useState([]);
    const [dates, setDates] = useState([]);

    const item = props.route.params.item;
    props.navigation.setOptions({ title: item.codigo });

    const getIndicator = async () => {
        const response: any = await indicatorclDB.get(`/api/${item.codigo}`)
        const { data: { serie = {} } = {} } = response;
        const dates = serie.slice(0, 3).map(({ fecha }: any) => moment(fecha).format('L') ?? "");
        const values = serie.slice(0, 10).map(({ valor }: any) => valor ?? 0);

        setValues(values);
        setDates(dates);
    }

    useEffect(() => {
        getIndicator()
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
            <View>
                <LineChart
                    data={{
                        labels: dates,
                        datasets: [
                            {
                                data: values,
                                color: (opacity = 1) => `rgba(255, 255, 255, 1)`,
                                strokeWidth: 1 // optional

                            }
                        ],

                    }}
                    style={{
                        paddingTop: 30
                      }}
                    renderDotContent={({ x, y, index }) => {
                        return (
                            <Text
                                key={x + y} style={{ position: 'absolute', top: y - 25, left: x -15, fontWeight: 'bold', borderRadius: 3, backgroundColor: '#accdf3' }}>{values[index]}
                            </Text>
                        );
                    }}
                    width={Dimensions.get("window").width}
                    height={400}
                    yAxisInterval={1} 
                    chartConfig={{
                        backgroundGradientFrom: "#1a7aff",
                        backgroundGradientTo: "#1a7aff",
                        color: (opacity = 1) => `rgba(1, 1, 1, 1)`,
                        strokeWidth: 0.1, 
                        propsForDots: {
                            r: "1"
                        }
                    }}
                    withDots={true}
                    withInnerLines={false}
                    withOuterLines={false}
                    withShadow={false}
                />
            </View>
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