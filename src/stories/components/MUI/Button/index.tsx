import {
  Button as MUIButton,
  type ButtonProps as MuiButtonProps,
} from '@mui/material'

export type ButtonProps = MuiButtonProps & {
  label: string
}

export const Button = ({ label, ...rest }: ButtonProps) => (
  <MUIButton {...rest}>{label}</MUIButton>
)
