import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Form({
  defaultValues = {},
  children,
  schema,
  style,
  className,
}) {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <div className={className} style={style}>
        {children}
      </div>
    </FormProvider>
  );
}
