import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

import BarChartD3 from "../charts/BarChartD3"

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        let data = []
        let brazilData = this.props.route.params
        Object.keys(brazilData).map(m => {
            if (brazilData[m].Country === "United States of America") {
                data.push({ label: "USA", value: brazilData[m].TotalDeaths })
            } else {
                data.push({ label: brazilData[m].Country, value: brazilData[m].TotalDeaths })
            }

        })
        this.setState({ data })
    }

    render() {

        const data = [
            { label: 'Jan', value: 50 },
            { label: 'Feb', value: 312 },
            { label: 'Mar', value: 424 },
            { label: 'Apr', value: 745 },
            { label: 'May', value: 890 },
            { label: 'Jun', value: 934 },
            { label: 'Jul', value: 950 },
            { label: 'Aug', value: 980 },
            { label: 'Sep', value: 1230 },
            { label: 'Oct', value: 1860 },
            { label: 'Nov', value: 1890 },
            { label: 'Dec', value: 1943 }
        ]

        return (
            <View style={styles.container}>
                <View style={{flex: 9, justifyContent: 'center',  alignItems: 'center'}}> 
                    <Text>D3 - Countries COVID total status</Text>
                    <BarChartD3 data={this.state.data.length > 0 ? this.state.data : data} round={100} unit="cases" />
                </View>
                <View style={{ flexDirection: "row", flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
                    <View style={{ marginRight: 10 }}>
                        <Button
                            color="#DC143C"
                            title="Line Graph"
                            onPress={() =>
                                this.props.navigation.navigate('Line')
                            }
                        />
                    </View>
                    <View>
                        <Button
                            title="Bar Graph"
                            color="#3CB371"
                            onPress={() =>
                                this.props.navigation.navigate('Bar')
                            }
                        />
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
