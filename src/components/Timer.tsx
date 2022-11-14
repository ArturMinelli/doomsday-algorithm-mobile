import { differenceInMilliseconds } from "date-fns";
import { Box, useTheme, Text } from "native-base";
import { useEffect } from "react";
import { useCycles } from "../hooks/useCycles";
import { formatMilliseconds } from "../utils/dateGenrator";

export function Timer() {
  const { activeCycle, passedMilliseconds, updateMilliseconds } = useCycles()
  const { colors, sizes } = useTheme()

  useEffect(() => {
    let interval: number

    if(activeCycle && !activeCycle.duration) {
        interval = window.setInterval(() => {
        const currentDifferenceInMilliseconds = differenceInMilliseconds(new Date(), new Date(activeCycle.startDate))
        updateMilliseconds(currentDifferenceInMilliseconds)
      }, 5)
    }

    return () => {
      clearInterval(interval)
    }

  }, [activeCycle, updateMilliseconds])
  return (
    <Box
      width='75%'
      display='flex'
      alignItems='center'
      justifyContent='center'
      marginTop={84}
      padding={4}
      borderRadius={99999}
      borderWidth={4}
      borderColor={colors.green[500]}
      bgColor={colors.gray[700]}
    >
    <Text
      color={colors.gray[100]}
      fontSize={sizes[12]}
      fontWeight="extrabold"
      margin={0}
    >
      {formatMilliseconds(passedMilliseconds)}
    </Text>
    </Box>
  )
}