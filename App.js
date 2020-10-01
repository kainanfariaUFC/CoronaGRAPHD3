
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BarChartScreen from "./components/screens/BarChartScreen"
import PizzaChartScreen from "./components/screens/PizzaChartScreen"
import LineChartScreen from "./components/screens/LineChartScreen"
import BarChartD3Screen from "./components/screens/BarChartD3Screen"
import WelcomeScreen from "./components/screens/WelcomeScreen"
import Axios from "axios"

const Stack = createStackNavigator();
const countriesBars = ["United States of America", "Brazil", "China", "Italy", "New Zealand"]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmed: "loading",
      recovered: "loading",
      deaths: "loading",
      countries: [],
      brazil: [],
      barCountries: [],
      TotalDeaths: [],
    };
  }

  async componentDidMount() {
    let barCountries = []
    let TotalDeaths = []
    const defaultRes = await Axios.get("https://api.covid19api.com/summary");
    const brazilRes = await Axios.get(
      "https://api.covid19api.com/country/brazil/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z"
    );

    defaultRes.data.Countries.forEach(element => {
      if (countriesBars.includes(element.Country)) {
        barCountries.push(element)
        TotalDeaths.push(element.TotalDeaths)
      }
    });
    this.setState({
      confirmed: defaultRes.data.Global.TotalConfirmed,
      recovered: defaultRes.data.Global.TotalRecovered,
      deaths: defaultRes.data.Global.TotalDeaths,
      countries: defaultRes.data.Countries,
      brazil: brazilRes.data,
      barCountries: barCountries,
      TotalDeaths: TotalDeaths,
    });

  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
          />
          <Stack.Screen
            name="Bar"
            component={BarChartScreen}
            initialParams={this.state.TotalDeaths}
          />
          <Stack.Screen
            name="Pizza"
            component={PizzaChartScreen}
            initialParams={this.state}
          />
          <Stack.Screen
            name="Line"
            component={LineChartScreen}
            initialParams={this.state.brazil}
          />
          <Stack.Screen
            name="D3Bar"
            component={BarChartD3Screen}
            initialParams={this.state.barCountries}
          />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
