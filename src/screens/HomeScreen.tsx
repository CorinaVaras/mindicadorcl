import React, { useEffect, useState } from 'react'
import { ListItem, Icon } from "react-native-elements";
import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView } from 'react-native';
import indicatorclDB from '../api/IndicatorclDB';
import styles from './styles/home'
import  { IndicatorsItem } from '../interfaces/interfaces'

interface Props extends StackScreenProps<any,any>{};

export const HomeScreen = ({ navigation }: Props) => {

    const [dataIndicators, setData] = useState([]);

    const getIndicator = async () => {
        const response = await indicatorclDB.get('/api')
        const { data } = response;
        const newArray: any = Object.values(data)
        const res = newArray.filter((i: any) => typeof i !== 'string')
        console.log(res);
        
        setData(res);
    }

    useEffect(() => {
        getIndicator()
    }, [])

    return (
        <ScrollView>
            {
                dataIndicators &&
                dataIndicators.map((item: IndicatorsItem, i: number) => (
                    <ListItem key={i} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title onPress={() => navigation.navigate('Detail', { item })} >{item.codigo}</ListItem.Title>
                            <ListItem.Subtitle style={styles.list}>{item.unidad_medida}</ListItem.Subtitle>
                        </ListItem.Content>
                        <Icon name={'info-outline'} color={'#2B90F7'} onPress={() => navigation.navigate('Info', { item })} />
                        <ListItem.Chevron size={24} />
                    </ListItem>
                ))
            }
        </ScrollView>
    )
}

