import {
  Button as MuiButton,
  type ButtonProps as MuiButtonProps,
} from '@mui/material'

export type ButtonProps = MuiButtonProps & {
  label: string
}

export const Button = ({ label, ...rest }: ButtonProps) => (
  <MuiButton {...rest}>{label}</MuiButton>
)
