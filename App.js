import React, {useLayoutEffect, useState} from 'react';
import {Button, Image, Text, TextInput, View} from 'react-native';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// React Navigation > Fundamentals > Getting started ~ Header buttons (Sample Example)

const HomeScreen = ({navigation}) => {
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log('focused');
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('unfocused');
      };
    }, []),
  );

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
    </View>
  );
};

// const HomeScreen = ({navigation, route}) => {
//   useEffect(() => {
//     if (route.params?.post) {
//     }
//   }, [route.params?.post]);
//
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Button
//         title={'Create post'}
//         onPress={() =>
//           navigation.navigate('CreatePost', {
//             name: 'Custom post header',
//           })
//         }
//       />
//       <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
//     </View>
//   );
// };

// const HomeScreen = ({navigation}) => {
//   const [count, setCount] = useState(0);
//
//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerRight: () => (
//         <Button onPress={() => setCount(c => c + 1)} title="Update count" />
//       ),
//     });
//   }, [navigation]);
//
//   return <Text>Count: {count}</Text>;
// };

const CreatePostScreen = ({navigation, route}) => {
  const [postText, setPostText] = useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{height: 200, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate({
            name: 'Home',
            params: {post: postText},
            marge: true,
          });
        }}
      />
      <Button
        title={'Update the title'}
        onPress={() => navigation.setOptions({title: 'Updated !!!'})}
      />
    </>
  );
};

const DetailsScreen = ({route, navigation}) => {
  const {itemId, otherParam} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={{
        uri: 'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
      }}
    />
  );
}

const Stack = createNativeStackNavigator();

// NavigationContainer : navigation 의 트리를 관리하고 상태를 포함하는 컴포넌트, 모든 네비게이터의 구조를 래핑해야 함, 최상위 선언
// createNativeStackNavigator : Screen 및 Navigator 속성을 포함하는 객체를 반환하는 함수, 둘 다 네비게이터 구성에 사용
// Navigator : navigation 의 구조를 정의
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          title: 'Common Overview',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleColor: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: props => <LogoTitle {...props} />,
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{otherParam: 'initial Param'}}
        />
        {/*<Stack.Screen*/}
        {/*  name="CreatePost"*/}
        {/*  component={CreatePostScreen}*/}
        {/*  options={({route}) => ({title: route.params.name})}*/}
        {/*/>*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
