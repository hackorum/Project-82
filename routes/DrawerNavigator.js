import { createDrawerNavigator } from "react-navigation-drawer";
import { TabNavigator } from "./TabNavigator";
import SettingsScreen from "../screens/SettingsScreen";
import Sidebar from "../components/Sidebar";
import MyBarterScreen from "../screens/MyBarterScreen";

export const DrawerNavigator = createDrawerNavigator(
  {
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: {
        title: "Home",
      },
    },
    Settings: {
      screen: SettingsScreen,
    },
    MyBarters: {
      screen: MyBarterScreen,
      navigationOptions: {
        title: "My Barters",
      },
    },
  },
  {
    contentComponent: Sidebar,
  },
  {
    initialRouteName: "Home",
  }
);
