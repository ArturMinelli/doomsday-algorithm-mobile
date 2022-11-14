import { Button, Text, useTheme, IButtonProps } from 'native-base'

export function StartButton(props: IButtonProps) {
  const { colors, sizes } = useTheme()

  return (
    <Button
      {...props}
      width='75%'
      marginTop={84}
      padding={4}
      borderRadius={99999}
      borderWidth={4}
      borderColor={colors.green[500]}
      bgColor={colors.gray[700]}
      _pressed={{
        opacity: 0.9,
      }}
    >
    <Text
      color={colors.gray[100]}
      fontSize={sizes[12]}
      fontWeight="extrabold"
    >
      Start
    </Text>
  </Button>
  )
}