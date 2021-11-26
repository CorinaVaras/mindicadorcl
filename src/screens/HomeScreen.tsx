import React, { useEffect, useState } from 'react'
import { ListItem, Icon } from "react-native-elements";
import { ScrollView } from 'react-native';
import indicatorclDB from '../api/IndicatorclDB';

export const HomeScreen = (props: any) => {
    const { navigation } = props;
    
    const [ dataIndicators, setData ] = useState([]);

    const getIndicator = async () => {
        const response = await indicatorclDB.get('/api')
        const { data } = response;
        const newArray: any =  Object.values(data)
        const res = newArray.filter((i:any) => typeof i !== 'string')
        setData(res);
    }

    useEffect(() => {
        getIndicator()
    }, []) 


    return (
        <ScrollView>
            {
                dataIndicators &&
                dataIndicators.map((item: any, i: any) => (
                    <ListItem key={i} bottomDivider>
                        <ListItem.Content>
                        <ListItem.Title onPress={() => navigation.navigate('Detail', dataIndicators, item)} >{item.codigo}</ListItem.Title>
                        <ListItem.Subtitle style={{color:'#2B90F7'}}>{item.unidad_medida}</ListItem.Subtitle>
                        </ListItem.Content>
                        <Icon name={'info-outline'} color={'#2B90F7'} onPress={() => navigation.navigate('Info', {dataIndicators, item})} />
                        <ListItem.Chevron  size={24} />
                    </ListItem>
                ))
            }
        </ScrollView>   
    )
}

