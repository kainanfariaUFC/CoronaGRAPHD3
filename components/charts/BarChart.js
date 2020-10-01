import React from 'react'
import { BarChart, Grid, YAxis, XAxis } from 'react-native-svg-charts'
import { View, Text } from 'react-native'

class BarChartExample extends React.PureComponent {
  render() {
    const fill = '#C91616'
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
          <BarChart style={{ width: 240, height: 200, marginLeft: 20 }} data={this.props.data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
            <Grid />
          </BarChart>
        </View>

        <View>
          <XAxis
            style={{ marginLeft: 90, width: 240 }}
            data={this.props.data}
            formatLabel={(values, index) => index + 1}
            contentInset={{ left: 30, right: 20 }}
            svg={{ fontSize: 10, fill: 'black' }}
          />
        </View>

        <Text style={{ justifyContent: "space-between", marginTop: 10, marginBottom: 15, fontSize: 10, flexDirection: "row" }}>
          <Text> 1 - Brazil </Text>
          <Text> 2 - China </Text>
          <Text> 3 - Italy </Text>
          <Text> 4 - New Zealand </Text >
          <Text> 5 - USA </Text>
        </Text>
      </>
    )
  }
}

export default BarChartExample;