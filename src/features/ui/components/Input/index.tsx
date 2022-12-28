import { useRouter } from "next/router";
import type { FC, InputHTMLAttributes, ForwardedRef } from "react";
import React from "react";
import { useState } from "react";

import { Routes } from "~/features/core/constants/routes";

import { EyeIcon } from "./parts/EyeIcon";
import {
  InputWrapper,
  Label,
  LabelText,
  PasswordToggle,
  StyledInput,
} from "./styled";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  name: string;
  type: string;
  register?: object;
};

export const Input: FC<Props> = React.forwardRef(
  (
    { label, name, type, error, register, ...rest },
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [isPasswordShown, togglePassword] = useState(false);
    const inputType = isPasswordShown ? "text" : type;

    const { pathname } = useRouter();
    let up: Boolean = pathname === Routes.SIGN_UP;

    return (
      <InputWrapper>
        <Label hasError={Boolean(error)} key={error}>
          <StyledInput
            ref={ref}
            placeholder={label}
            name={name}
            type={inputType}
            {...rest}
            {...register}
          />
          <LabelText>{label}</LabelText>
          {type === "password" && up === false && (
            <PasswordToggle
              type="button"
              isActive={Boolean(isPasswordShown)}
              onClick={() => togglePassword(!isPasswordShown)}
              aria-label="Display password text"
            >
              <EyeIcon />
            </PasswordToggle>
          )}
        </Label>
      </InputWrapper>
    );
  },
);

Input.displayName = "Input";
