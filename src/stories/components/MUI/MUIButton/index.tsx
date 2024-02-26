import {
  Button as M_Button,
  type ButtonProps as MuiButtonProps,
} from '@mui/material'

export type ButtonProps = MuiButtonProps & {
  label: string
}

export const MUIButton = ({ label, ...rest }: ButtonProps) => (
  <M_Button {...rest}>{label}</M_Button>
)
