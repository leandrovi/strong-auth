import * as React from "react";
import { SubmitHandler, FormHandles, FormHelpers } from "@unform/core";
import { useRouter } from "next/router";
import * as Yup from "yup";

import { useAuth } from "src/hooks/AuthContext";
import { api } from "src/api";

import { Input } from "@components/Input/Input";

import { StyledForm, LoginButton } from "./Form.styles";

interface FormData {
  email: string;
  password: string;
}

export function Form() {
  const formRef = React.useRef<FormHandles>(null);
  const router = useRouter();
  const { setAuthInfo } = useAuth();

  const [authError, setAuthError] = React.useState(false);
  const [errorCount, setErrorCount] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [submitLoading, setSubmitLoading] = React.useState(false);

  async function handleSubmit(
    data: SubmitHandler<FormData>,
    _: FormHelpers,
    event?: React.FormEvent<Element> | undefined
  ) {
    event?.preventDefault();
    setSubmitLoading(true);

    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("O e-mail precisa ser um e-mail válido")
          .required("Por favor, digite um e-mail válido"),
        password: Yup.string()
          .min(6, "A senha deve estar no formato XXXX-XX-XXXX")
          .required("Por favor, digite a senha enviada por e-mail"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await api.post<{ exists: boolean }>("/login", data);

      if (!response.data.exists) {
        throw new Error("Attendee does not exist");
      }

      setAuthInfo();
      console.log("Cookie set successfully");

      setTimeout(() => {
        setSubmitLoading(false);
        router.push("/menu");
      }, 1000);
    } catch (err) {
      const validationErrors: { [path: string]: string } = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path as string] = error.message;
        });

        formRef.current?.setErrors(validationErrors);
      } else {
        if (errorCount < 3) {
          setErrorCount(errorCount + 1);
          setAuthError(true);
        }
      }

      setSubmitLoading(false);
    }
  }

  return (
    <StyledForm ref={formRef} onSubmit={handleSubmit}>
      <Input
        name="email"
        type="text"
        placeholder="Digite o seu e-mail"
        clearAuthError={() => setAuthError(false)}
      />

      <Input
        name="password"
        type="password"
        placeholder="Digite a sua senha"
        isPassword={true}
        clearAuthError={() => setAuthError(false)}
      />

      {authError && (
        <span>Seu e-mail e/ou senha estão incorretos, tente novamente</span>
      )}

      {errorCount >= 3 && (
        <span>
          Caso você esteja com dificuldades para fazer login, acesse nosso
          suporte no WhatsApp clicando{" "}
          <a href="https://adai.com.br" target="_blank" rel="noreferrer">
            aqui
          </a>
          , para que possamos ajudá-la
        </span>
      )}

      <LoginButton type="submit" disabled={submitLoading}>
        {submitLoading ? (
          <img src="/images/spinner.gif" alt="Spinner" />
        ) : (
          "entrar"
        )}
      </LoginButton>
    </StyledForm>
  );
}
