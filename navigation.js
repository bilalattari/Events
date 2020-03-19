/* eslint-disable */

import React from 'react'
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'
import { View, Text, TouchableOpacity } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Icon } from 'react-native-elements'
import Home from './src/screens/Home'
import Events from './src/screens/Events'
import Ticket from './src/screens/Tickets'
import Notification from './src/screens/Notification'
import Profile from './src/screens/Profile'
import EventDetail from './src/screens/Eventdetail'
const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  EventDetail: {
    screen: EventDetail,
    navigationOptions: {
      headerTitle: 'EventDetail'
    }
  },
}, { initialRouteName: 'Home' })
const EventsStack = createStackNavigator({
  Landing: {
    screen: Events,
    navigationOptions: {
      header: null
    }
  },
}, { initialRouteName: 'Landing' });

const TicketStack = createStackNavigator({
  Ticket: {
    screen: Ticket,
    navigationOptions: {
      header: null
    }
  },
}, { initialRouteName: 'Ticket' });

const NotificationStack = createStackNavigator({
  Notification: {
    screen: Notification,
    navigationOptions: {
      header: null
    }
  },
}, { initialRouteName: 'Notification' });

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null
    }
  },
}, { initialRouteName: 'Profile' });

const MainTabs = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      title: "Home",
    },
  },
  NearbyEvents: {
    screen: EventsStack,
    navigationOptions: {
      title: "Events",
    },
  },
  Tickets: {
    screen: TicketStack,
    navigationOptions: {
      title: "Tickets",
    },
  },
  Notification: {
    screen: NotificationStack,
    navigationOptions: {
      title: "Notifications",
    },
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      title: "Profile",
    },
  },
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarComponent: (props) => <BottomComponent routeName={navigation.state.routeName} {...props} />
  })
});
const MainDrawer = createDrawerNavigator({
  MainTabs: MainTabs,
});

const AppModalStack = createStackNavigator(
  {
    App: MainDrawer,
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const App = createSwitchNavigator({
  App: {
    screen: AppModalStack,
  },
});

const Routes = createAppContainer(App)

export default Routes
class BottomComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const icons = [{
      name: "Home",
      iconName: 'home'
    }, { name: "Nearby Events", iconName: 'calendar' },
    { name: "Tickets", iconName: 'ticket' },
    { name: "Notification", iconName: 'bell' },
    { name: "Profile", iconName: 'user' },]
    return (
      <View style={{ height: 60, borderTopColor: '#ccc', borderTopWidth: 1, flexDirection: 'row' }}>
        {
          icons.map((data, index) =>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate(this.props.navigation.state.routes[index].routes[0].routeName)}
              style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            >
              <Icon type={'font-awesome'} name={data.iconName} color={data.name === this.props.routeName ? 'blue': '#ccc'} size={24} />
              <Text style={{ fontSize: 12 , color : data.name === this.props.routeName ? 'blue': '#ccc' }}>{data.name}</Text>
            </TouchableOpacity>
          )
        }
      </View>
    )
  }
}