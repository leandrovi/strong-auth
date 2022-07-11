import { useRef, useEffect, InputHTMLAttributes, useState } from "react";
import { useField } from "@unform/core";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

import { Container } from "./Input.styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?:
    | "text"
    | "number"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "hidden"
    | "month"
    | "password"
    | "time"
    | "range"
    | "search"
    | "tel"
    | "url"
    | "week";
  label?: string;
  value?: string;
  isPassword?: boolean;
  clearAuthError: () => void;
}

export function Input({
  name,
  type,
  label,
  value,
  clearAuthError,
  isPassword,
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { fieldName, defaultValue, registerField, error, clearError } =
    useField(name);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const defaultInputValue = value || defaultValue;

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, newValue) => {
        ref.current.value = newValue;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  function handlePasswordToggle() {
    if (inputRef.current?.type === "text") {
      inputRef.current.type = "password";
    } else if (inputRef.current?.type === "password") {
      inputRef.current.type = "text";
    }

    setPasswordVisible(!passwordVisible);
  }

  function PasswordToggle() {
    return (
      <button type="button" onClick={handlePasswordToggle}>
        {passwordVisible ? (
          <IoMdEyeOff size={25} color="#121214" />
        ) : (
          <IoMdEye size={25} color="#121214" />
        )}
      </button>
    );
  }

  return (
    <Container>
      <label htmlFor={fieldName}>{label}</label>

      {isPassword ? (
        <div>
          <input
            type={type || "text"}
            id={fieldName}
            ref={inputRef}
            defaultValue={defaultInputValue}
            onFocus={() => {
              clearError();
              clearAuthError();
            }}
            {...rest}
          />

          <PasswordToggle />
        </div>
      ) : (
        <input
          type={type || "text"}
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultInputValue}
          onFocus={() => {
            clearError();
            clearAuthError();
          }}
          autoCorrect="off"
          autoCapitalize="none"
          {...rest}
        />
      )}

      {error && <span>{error}</span>}
    </Container>
  );
}
