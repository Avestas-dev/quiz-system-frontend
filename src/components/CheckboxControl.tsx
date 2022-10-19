import { FormControlLabel, FormHelperText } from "@mui/material"
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox"
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form"

type CheckboxControlProps<TFieldValues extends FieldValues = FieldValues> = {
  name: FieldPath<TFieldValues>
  control: Control<TFieldValues>
  label?: string
}

export const CheckboxControl = <
  TFieldValues extends FieldValues = FieldValues
>({
  name,
  control,
  label,
  ...rest
}: CheckboxControlProps<TFieldValues> & CheckboxProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={!!rest.defaultChecked as boolean | any} // TODO: fix this any
      render={({
        field: { onChange, value: hookFormValue, ref },
        formState,
      }) => (
        <div className="flex flex-col">
          <FormControlLabel
            style={{ fontWeight: "semibold" }}
            control={
              <Checkbox
                value={hookFormValue}
                onChange={(e) => onChange(e.target.checked)}
                sx={
                  !!formState.errors[name]
                    ? {
                        color: "#d32f2f",
                        "&.Mui-checked": {
                          color: "#d32f2f",
                        },
                      }
                    : {}
                }
                {...rest}
              />
            }
            label={label}
          />

          {!!formState.errors[name] && (
            <FormHelperText style={{ color: "#d32f2f" }}>
              {formState.errors[name]?.message as string}
            </FormHelperText>
          )}
        </div>
      )}
    />
  )
}
