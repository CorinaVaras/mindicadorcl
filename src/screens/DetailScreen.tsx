import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { ListItem } from "react-native-elements";
import moment from 'moment'
import indicatorclDB from '../api/IndicatorclDB';


export const DetailScreen = (props: any) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

    const [list, setList] = useState([]);
    const item = props.route.params.item;

    const getIndicator = async () => {
        const response: any = await indicatorclDB.get(`/api/${item.codigo}`)
        const { data: { serie = {} } = {} } = response;
        setList(serie)
    
    }

    useEffect(() => {
        getIndicator()
    }, [])


    props.navigation.setOptions({ title: item.codigo });
   
    return (
        <ScrollView>
            {
                list &&
                list.map((item: any, i: any) => (
                    <ListItem key={i} bottomDivider>
                        <ListItem.Content style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                        <ListItem.Title style={{color:'#2B90F7'}}>{moment(item.fecha).format('L')}</ListItem.Title>
                        <ListItem.Subtitle style={{color:'black', fontWeight: 'bold'}}>{`$ ${item.valor}`}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </ScrollView>   
    
    )
}