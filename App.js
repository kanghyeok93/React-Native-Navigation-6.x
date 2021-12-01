import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  )
}

const DetailsScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();

// NavigationContainer : navigation 의 트리를 관리하고 상태를 포함하는 컴포넌트, 모든 네비게이터의 구조를 래핑해야 함, 최상위 선언
// createNativeStackNavigator : Screen 및 Navigator 속성을 포함하는 객체를 반환하는 함수, 둘 다 네비게이터 구성에 사용
// Navigator : navigation 의 구조를 정의
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"} screenOptions={{title: 'Common Overview'}}>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Overview'}}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
