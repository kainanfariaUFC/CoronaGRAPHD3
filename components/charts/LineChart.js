import React from 'react'
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import { View, Text } from 'react-native'

class YAxisExample extends React.PureComponent {
    render() {

        const contentInset = { top: 20, bottom: 20 }

        return (
            <>
                <View style={{ width: 300, height: 200, flexDirection: 'row' }}>
                    <YAxis
                        data={this.props.data}
                        contentInset={contentInset}
                        svg={{
                            fill: 'grey',
                            fontSize: 10,
                        }}
                        numberOfTicks={10}
                        formatLabel={(value) => `${value} cases`}
                    />
                    <LineChart
                        style={{ flex: 1, marginLeft: 16 }}
                        data={this.props.data}
                        svg={{ stroke: 'rgb(255,99,71)' }}
                        contentInset={contentInset}
                    >
                        <Grid />
                    </LineChart>
                </View>
                <Text style={{ marginTop: 10, marginBottom: 15, fontSize: 10 }}>
                    Brazil data from March to April
                </Text>
            </>
        )
    }
}

export default YAxisExample;