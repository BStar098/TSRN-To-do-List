import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Test from "./screens/Test";

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Test"
          component={Test}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
