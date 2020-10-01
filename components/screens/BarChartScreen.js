import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import BarChart from "../charts/BarChart"

class BarChartScreen extends React.Component {
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
            data.push(brazilData[m])
        })
        this.setState({ data })
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={{ flex: 9, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Countries COVID total status</Text>
                    <BarChart data={this.state.data} />
                </View>
                <View style={{ flexDirection: "row", flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ marginRight: 10 }}>
                        <Button
                            color="#DC143C"
                            title="Bar D3 Graph"
                            onPress={() =>
                                this.props.navigation.navigate('D3Bar')
                            }
                        />
                    </View>
                    <View>
                        <Button
                            title="Pizza Graph"
                            color="#3CB371"
                            onPress={() =>
                                this.props.navigation.navigate('Pizza')
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


export default BarChartScreen;