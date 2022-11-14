import { NavigationContainer } from '@react-navigation/native'
import { Box } from 'native-base'
import { CyclesContextProvider } from '../contexts/CyclesContext'
import { AppRoutes } from './app.routes'

export function Routes() {
  return (
    <Box flex={1} bgColor="gray.900">
      <NavigationContainer>
        <CyclesContextProvider>
          <AppRoutes />
        </CyclesContextProvider>
      </NavigationContainer>
    </Box>
  )
}