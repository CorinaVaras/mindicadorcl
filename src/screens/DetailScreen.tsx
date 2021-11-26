import React from 'react'
import { ScrollView } from 'react-native'
import { ListItem } from "react-native-elements";


export const DetailScreen = (props: any) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

    const data = props.route.params;
   
    return (
        <ScrollView>
            {
                data &&
                data.map((item, i) => (
                    <ListItem bottomDivider>
                        <ListItem.Content style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                        <ListItem.Title>{item.fecha}</ListItem.Title>
                        <ListItem.Subtitle style={{color:'#2B90F7'}}>{`$${item.valor}`}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </ScrollView>   
    
    )
}