import React from 'react'
import { ScrollView } from 'react-native'
import { ListItem } from "react-native-elements";
import moment from 'moment'


export const DetailScreen = (props: any) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

    const data = props.route.params;
  
   
    return (
        <ScrollView>
            {
                data &&
                data.map((item, i) => (
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