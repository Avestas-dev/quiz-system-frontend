import { TextField, TextFieldProps } from "@mui/material"
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form"

type InputProps<TFieldValues extends FieldValues = FieldValues> = {
  name: FieldPath<TFieldValues>
  control: Control<TFieldValues>
  textFieldProps: TextFieldProps
}

export const Input = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
}: InputProps<TFieldValues>) => (
  <Controller
    name={name}
    control={control}
    render={() => (
      <TextField
        name="test"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
    )}
  />
)
