import { yupResolver } from "@hookform/resolvers/yup";
import type { FC } from "react";
import { useForm } from "react-hook-form";

import {
  Description,
  // ErrorMessage,
} from "~/features/sign/pages/SignPage/styled";
import { Button } from "~/features/ui/components/Button";
import { Input } from "~/features/ui/components/Input";

import { schema } from "./schema";

import { Sign } from "../Sign";

type Props = {
  isUp?: boolean;
};

export const SignInForm: FC<Props> = ({ isUp }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data?: object): void => {
    console.log(data);
  };

  return (
    <>
      {/*
      {errors.email || errors?.password ? (
        <ErrorMessage>
          {" "}
          {errors?.email && (
            <span role="alert">{errors.email?.message}</span>
          )}{" "}
          {errors?.password && (
            <span role="alert">{errors.password?.message}</span>
          )}
        </ErrorMessage>
      ) : (
        <Description>Enter your details below.</Description>
      )}
     */}
      <Description>Enter your details below.</Description>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          type="text"
          errors={errors.email?.message}
          {...register("email")}
        />
        <Input
          label="Password"
          type="password"
          errors={errors.password?.message}
          {...register("password")}
        />
        <Sign isDown isUp={isUp} />
        <p>
          <Button
            accent="primary"
            size="medium"
            margin="medium"
            type="submit"
            css={{ marginTop: "4rem" }}
          >
            Sign in
          </Button>
        </p>
      </form>
    </>
  );
};
