import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Timer } from 'phosphor-react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useTheme } from 'native-base'
import { Platform } from 'react-native'
import { Trainer } from '../screens/Trainer'
import * as NavigationBar from 'expo-navigation-bar';

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
  const { colors, sizes } = useTheme()
  NavigationBar.setBackgroundColorAsync(colors.gray[700])

  const iconsSize = sizes[6]

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.gray[300],
        tabBarStyle: {
          position: 'absolute',
          height: sizes[14],
          borderTopWidth: 0,
        },
        tabBarBackground: () => (
          <LinearGradient
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
            }}
            colors={[colors.gray[600], colors.gray[700]]}
          />
        ),
        tabBarItemStyle: {
          position: 'relative',
          top: Platform.OS === 'android' ? -10 : 0
        }
      }}
    >
      <Screen
        name='trainer'
        component={Trainer}
        options={{
          tabBarIcon: ({ color }) => (
            <Timer color={color} size={iconsSize}/>
          )
        }}
      />
    </Navigator>
  )
}