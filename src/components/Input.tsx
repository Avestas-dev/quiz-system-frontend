import { TextField, TextFieldProps } from "@mui/material"
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form"

type InputProps<TFieldValues extends FieldValues = FieldValues> = {
  name: FieldPath<TFieldValues>
  control: Control<TFieldValues>
}

export const Input = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  ...rest
}: InputProps<TFieldValues> & TextFieldProps) => (
  <Controller
    name={name}
    control={control}
    render={() => (
      <TextField name={name} sx={{ borderRadius: 300 }} {...rest} />
    )}
  />
)
