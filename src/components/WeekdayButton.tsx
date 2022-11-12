import { Button, Text, IButtonProps, useTheme } from "native-base";
import sizes from "native-base/lib/typescript/theme/base/sizes";
import { useState } from "react";

interface WeekdayButtonProps extends IButtonProps {
  weekday: string;
}

export function WeekdayButton({ weekday, ...props }: WeekdayButtonProps) {
  const [isPressed, setIsPressed] = useState<boolean>(false)
  const { colors, sizes } = useTheme()

  return (
    <Button
      {...props}
      minWidth={32}
      padding={12}
      paddingTop={4}
      paddingBottom={4}
      borderRadius={10}
      bgColor={colors.gray[700]}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      _pressed={{
        bgColor: "gray.200",
        opacity: 0.9
      }}
    >
      <Text
        color={isPressed ? colors.green[500] : colors.green[300]}
        fontSize={sizes[4]}
        fontWeight="bold"
      >
        {weekday}
      </Text>
    </Button>
  )
}