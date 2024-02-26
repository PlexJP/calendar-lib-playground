import {
  Button as KendoButton,
  ButtonProps as KendoButtonProps,
} from '@progress/kendo-react-buttons'

export type ButtonProps = KendoButtonProps & {
  label: string
}

export const Button = ({ label, ...rest }: ButtonProps) => {
  return (
    <>
      <KendoButton {...rest}> {label} </KendoButton>
    </>
  )
}
