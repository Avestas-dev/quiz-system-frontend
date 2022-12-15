import { Select, SelectProps } from "@mui/material"
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form"

type SelectControlProps<TFieldValues extends FieldValues = FieldValues> = {
  name: FieldPath<TFieldValues>
  control: Control<TFieldValues>
}

export const SelectControl = <TFieldValues extends FieldValues = FieldValues>({
  name,
  control,
  defaultValue,
  children,
  ...props
}: SelectControlProps<TFieldValues> & SelectProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref }, formState }) => (
        <Select
          error={!!formState.errors[name]}
          onChange={onChange}
          value={value || ""}
          ref={ref}
          {...props}
        >
          {children}
        </Select>
      )}
      defaultValue={(defaultValue as any) || undefined}
    />
  )
}
