import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PizzaChart from "../charts/PizzaChart"

class PizzaChartScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 9, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Global COVID status</Text>
                    <PizzaChart data={this.props.route.params} />
                </View>
                <View style={{ flexDirection: "row", flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ marginRight: 10 }}>
                        <Button
                            color="#DC143C"
                            title="Bar Graph"
                            onPress={() =>
                                this.props.navigation.navigate('Bar')
                            }
                        />
                    </View>
                    <View>
                        <Button
                            title="Line Graph"
                            color="#3CB371"
                            onPress={() =>
                                this.props.navigation.navigate('Line')
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


export default PizzaChartScreen;