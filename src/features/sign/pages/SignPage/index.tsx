import type { NextPage } from "next";
import { useRouter } from "next/router";

import { Routes } from "~/features/core/constants/routes";
import { Container } from "~/features/ui/components/Container";
import { LayoutEx } from "~/features/ui/components/LayoutEx";

import { Sign } from "./parts/Sign";
import { SignInForm } from "./parts/SignInForm";
import { SignUpForm } from "./parts/SignUpForm";
import { FormWrapper, Title, } from "./styled";

export const SignPage: NextPage = () => {
  const { pathname } = useRouter();
  let up: Boolean = pathname === Routes.SIGN_UP;

  return (
    <LayoutEx topRight={<Sign up={up} />}>
      <Container>
        <FormWrapper>
          <Title>
            {up === false
              ? "Sign in to Eventio."
              : "Get started absolutely free."}
          </Title>
          {up === true ? <SignUpForm /> : <SignInForm />}
        </FormWrapper>
      </Container>
    </LayoutEx>
  );
};
