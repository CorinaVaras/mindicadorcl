import React, { useEffect, useState} from 'react'
import { ScrollView } from 'react-native'
import { ListItem } from "react-native-elements";
import moment from 'moment'
import indicatorclDB from '../api/IndicatorclDB';
import Loading from '../componentes/Loading';
import styles from './styles/detail';
import { screenProps } from '../interfaces/interfaces';


export const DetailScreen = (props: screenProps) => {  
    console.log(JSON.stringify(props));
    

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const item = props.route.params.item;
    props.navigation.setOptions({ title: item.codigo });

    const getIndicator = async () => {
        setLoading(true)
        const response: any = await indicatorclDB.get(`/api/${item.codigo}`)
        const { data: { serie = {} } = {} } = response;
        setList(serie)
        setLoading(false)
    }

    useEffect(() => {
        getIndicator()
    }, [])
   
    return (
        <>
        { 
            loading ? (
                <Loading/>
            ) : 
            <ScrollView>
            {
                list &&
                list.map((item: any, i: any) => (
                    <ListItem key={i} bottomDivider>
                        <ListItem.Content style={styles.container}>
                        <ListItem.Title style={styles.title}>{moment(item.fecha).format('L')}</ListItem.Title>
                        <ListItem.Subtitle style={styles.subTitle}>{`$ ${item.valor}`}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </ScrollView>   
            }
       </>
    
    )
}