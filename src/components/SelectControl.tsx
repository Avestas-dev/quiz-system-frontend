import { Select, SelectProps } from "@mui/material"
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form"

type SelectControlProps<TFieldValues extends FieldValues = FieldValues> = {
  name: FieldPath<TFieldValues>
  control: Control<TFieldValues>
  label?: string
  defaultValue: FieldPath<TFieldValues>
}

export const SelectControl = <TFieldValues extends FieldValues = FieldValues>({
  name,
  control,
  label,
  defaultValue,
  children,
  ...props
}: SelectControlProps<TFieldValues> & SelectProps) => {
  const labelId = `${name}-label`
  return (
    <Controller
      control={control}
      render={({ field: { onChange, value, ref }, formState }) => (
        <Select labelId={labelId} label={label} {...props}>
          {children}
        </Select>
      )}
      name={name}
      defaultValue={(defaultValue as any) || undefined}
    />
  )
}
