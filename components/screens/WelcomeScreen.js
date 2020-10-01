import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class BarChartScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 30, marginBottom:30}}> Welcome</Text>
                <View >
                    <Button
                        color="#008B8B"
                        title="ENTER"
                        onPress={() =>
                            this.props.navigation.navigate('Bar')
                        }
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default BarChartScreen;