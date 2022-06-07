import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Form({
  defaultValues = {},
  children,
  schema,
  className,
}) {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <div className={className}>{children}</div>
    </FormProvider>
  );
}
