import * as React from "react";
import { useState, useEffect } from "react";

type LabelInputProps = {
  labelText?: string;
  name: string;
  type?: "text" | "email" | "password";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasHelperText?: boolean;
  helperText?: string;
  value: string;
  placeholder?: string;
  hasLabel?: boolean;
  hasValidationError?: boolean;
  hasValidationSuccess?: boolean;
};

export const LabelInput = (props: LabelInputProps) => {
  const [inputStatus, setInputStatus] = useState<string>();

  useEffect(() => {
    if (props.hasValidationError) {
      setInputStatus("error");
    } else if (props.hasValidationSuccess) {
      setInputStatus("success");
    } else {
      setInputStatus("");
    }
  }, [props.hasValidationError]);

  function renderInputRings(inputStatus: string | undefined) {
    switch (inputStatus) {
      case "success":
        return "ring-2 ring-inset ring-green-500";
      case "error":
        return "ring-2 ring-inset ring-red-500";
      default:
        return "ring-1 ring-inset ring-gray-300";
    }
  }
  return (
    <>
      {props.hasLabel && (
        <label
          htmlFor={`${props.name}Input`}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {props.labelText}
        </label>
      )}
      <div className="mt-2">
        <input
          type={props.type}
          name={props.name}
          id={`${props.name}Input`}
          onChange={props.onChange}
          value={props.value}
          className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ${renderInputRings(
            inputStatus
          )} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          placeholder={props.placeholder || "Placeholder..."}
        />
        {props.hasHelperText && (
          <p className="mt-2 text-sm text-gray-500" id="email-description">
            {props.helperText}
          </p>
        )}
      </div>
    </>
  );
};
