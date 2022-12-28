import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  Description,
  ErrorMessage,
} from "~/features/sign/pages/SignPage/styled";
import { Button } from "~/features/ui/components/Button";
import { Input } from "~/features/ui/components/Input";

import { schema } from "./schema";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      repeatPassword: "",
    },
  });

  const onSubmit = (data?: object): void => {
    console.log(data);
  };

  return (
    <>
      {errors.firstName || errors.lastName || errors.email || errors.password || errors.repeatPassword ? (
        <ErrorMessage>
          {errors?.firstName && <span role="alert">{errors.firstName.message}</span>}{" "}
          {errors?.lastName && <span role="alert">{errors.lastName.message}</span>}{" "}
          {errors?.email && <span role="alert">{errors.email.message}</span>}{" "}
          {errors?.password && <span role="alert">{errors.password.message}</span>}{" "}
          {errors?.repeatPassword && <span role="alert">{errors.repeatPassword.message}</span>}
        </ErrorMessage>
      ) : (
        <Description>Enter your details below.</Description>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="First name" type="text" {...register("firstName")} />
        <Input label="Last name" type="text" {...register("lastName")} />

        <Input label="Email" type="text" {...register("email")} />
        <Input label="Password" type="password" {...register("password")} />

        <Input
          label="Repeat password"
          type="password"
          {...register("repeatPassword")}
        />
        <p>
          <Button
            accent="primary"
            size="medium"
            margin="medium"
            type="submit"
            css={{ marginTop: "4rem" }}
          >
            Sign up
          </Button>
        </p>
      </form>
    </>
  );
};
