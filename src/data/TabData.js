import FrendsScreen from '../Screens/FrendsScreen';
import HomeScreen from '../Screens/HomeScreen';
import MarkPlaceScreen from '../Screens/MarkPlaceScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import WatchScreen from '../Screens/WatchScreen';

export const TabData = [
  {
    id: 1,
    name: 'Home1',
    route: HomeScreen,
    tabBarInActiveiconName: 'home-outline',
    tabBarInActiveiconType: 'Ionicons',
    size: 25,
    tabBarActiveiconType: 'Ionicons',
    tabBarActiveiconName: 'home-sharp',
  },
  {
    id: 2,
    name: 'Home2',
    route: FrendsScreen,
    tabBarInActiveiconName: 'people-outline',
    tabBarInActiveiconType: 'Ionicons',
    size: 25,
    tabBarActiveiconType: 'Ionicons',
    tabBarActiveiconName: 'people',
  },
  {
    id: 3,
    name: 'Home3',
    route: WatchScreen,
    tabBarActiveiconType: 'Ionicons',
    tabBarInActiveiconName: 'tv-outline',
    tabBarInActiveiconType: 'Ionicons',
    tabBarActiveiconName: 'tv',
    size: 25,
  },
  {
    id: 4,
    name: 'Home4',
    route: MarkPlaceScreen,
    tabBarInActiveiconName: 'storefront-outline',
    tabBarInActiveiconType: 'MaterialCommunityIcons',
    tabBarActiveiconType: 'MaterialCommunityIcons',
    tabBarActiveiconName: 'storefront',
    size: 25,
  },
  {
    id: 5,
    name: 'Home5',
    route: NotificationScreen,
    tabBarInActiveiconName: 'notifications-outline',
    tabBarInActiveiconType: 'Ionicons',
    tabBarActiveiconType: 'Ionicons',
    tabBarActiveiconName: 'notifications',
    size: 25,
  },
  {
    id: 6,
    name: 'Home6',
    route: ProfileScreen,
    tabBarInActiveiconName: 'person-outline',
    tabBarInActiveiconType: 'Ionicons',
    tabBarActiveiconType: 'Ionicons',
    tabBarActiveiconName: 'person',
    size: 25,
  },
];
