import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {SCREENS} from '../Constants/screens';
import {ICONS} from '../Constants/icons';

const Tab = createBottomTabNavigator();

const FloatingButton = ({onPress}) => (
  <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
    <ICONS.PlusIcon />
  </TouchableOpacity>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let IconComponent;

          if (route.name === 'HomeScreen') IconComponent = <ICONS.HomeIcon />;
          else if (route.name === 'HealthScreen')
            IconComponent = <ICONS.HealthIcon />;
          else if (route.name === 'RecommendationScreen')
            IconComponent = <ICONS.RecommendationIcon />;
          else if (route.name === 'UserScreen')
            IconComponent = <ICONS.UserIcon />;

          return <View style={styles.iconContainer}>{IconComponent}</View>;
        },
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Tab.Screen name="HomeScreen" component={SCREENS.HomeScreen} />
      <Tab.Screen name="HealthScreen" component={SCREENS.HealthMonitorScreen} />
      <Tab.Screen
        name="AddPost"
        component={View} // Placeholder
        options={{
          tabBarButton: props => (
            <FloatingButton
              {...props}
              onPress={() => console.log('Open Camera Here')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="RecommendationScreen"
        component={SCREENS.RecommendationScreen}
      />
      <Tab.Screen name="UserScreen" component={SCREENS.UserScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: Platform.OS === 'ios' ? 10 : 0,
  },
  tabBarStyle: {
    height: 70,
    backgroundColor: 'white',
    borderColor: 'rgba(61, 83, 0, 1)',
    position: 'absolute',
    bottom: 10,
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButton: {
    backgroundColor: 'rgba(61, 83, 0, 1)',
    height: 60,
    width: 60,
    borderRadius: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    top: 4,
  },
});
