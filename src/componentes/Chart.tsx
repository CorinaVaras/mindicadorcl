import React from 'react'
import { Text, Dimensions } from 'react-native'

import {
    LineChart
} from "react-native-chart-kit";
import { ChartData } from '../interfaces/interfaces';


const Chart = (props:ChartData) => {
    
    return (
        <>
            <LineChart
                data={{
                    labels: props.dates,
                    datasets: [
                        {
                            data: props.values,
                            color: () => `rgba(255, 255, 255, 1)`,
                            strokeWidth: 1
                        }
                    ]
                }}
                style={{
                    paddingTop: 30
                }}
                renderDotContent={({ x, y, index }) => {
                    return (
                        <Text
                            key={x + y} style={{ position: 'absolute', top: y - 25, left: x - 15, fontWeight: 'bold', borderRadius: 3, backgroundColor: '#accdf3' }}>{props.values[index]}
                        </Text>
                    );
                }}
                width={Dimensions.get("window").width}
                height={400}
                yAxisInterval={1}
                chartConfig={{
                    backgroundGradientFrom: "#1a7aff",
                    backgroundGradientTo: "#1a7aff",
                    color: () => `rgba(1, 1, 1, 1)`,
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
        </>
    )
}

export default Chart;