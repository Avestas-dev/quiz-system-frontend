import { TextField, TextFieldProps } from "@mui/material"
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form"

type InputProps<TFieldValues extends FieldValues = FieldValues> = {
  name: FieldPath<TFieldValues>
  control: Control<TFieldValues>
}

export const InputControl = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  defaultValue,
  ...rest
}: InputProps<TFieldValues> & TextFieldProps) => (
  <Controller
    name={name}
    control={control}
    defaultValue={(defaultValue as any) || undefined}
    render={({ field: { onChange, value, ref }, formState }) => (
      <TextField
        onChange={onChange}
        value={value || ""}
        ref={ref}
        name={name}
        sx={{ borderRadius: 300 }}
        error={!!formState.errors[name]}
        helperText={(formState?.errors?.[name]?.message as string) || ""}
        {...rest}
      />
    )}
  />
)
