import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'
import { Text } from "react-native"

class ProgressCircleExample extends React.PureComponent {
    render() {
        return (
            <>
                <ProgressCircle
                    style={{ height: 200, width: 180, margin: 10 }}
                    backgroundColor={'rgb(60,179,113)'}
                    progress={this.props.data.deaths/this.props.data.confirmed}
                    progressColor={'rgb(220,20,60)'}
                />
                <Text style={{ marginBottom: 15, flexDirection: "row" }}> <Text>Total: {this.props.data.confirmed}</Text>  <Text style={{ color: "rgb(60,179,113)" }}>Recovered: {this.props.data.recovered}</Text > <Text style={{ color: "rgb(220,20,60)" }}> Deaths: {this.props.data.deaths}</Text></Text>
            </>
        )
    }
}
export default ProgressCircleExample