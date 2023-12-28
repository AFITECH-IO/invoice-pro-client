import * as React from "react";

type LabelTextAreaProps = {
  name?: string;
  id?: string;
  rows?: number;
  defaultValue?: string;
  placeholder?: string;
  labelText?: string;
  hasLabel?: boolean;
  onChange?: (event: React.ChangeEvent) => void;
  value?: string;
  hasRequiredIndicator?: boolean;
};

export const LabelTextArea = (props: LabelTextAreaProps) => {
  return (
    <>
      {props.hasLabel && (
        <label
          htmlFor={`${props.name}Input`}
          className="block text-sm font-medium leading-6 text-gray-50"
        >
          {props.labelText}{" "}
          {props.hasRequiredIndicator && (
            <span className="text-red-600">*</span>
          )}
        </label>
      )}
      <div className="mt-2">
        <textarea
          rows={props.rows || 4}
          name={props.name}
          id={`${props.name}Input`}
          className="form-textarea block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={props.defaultValue}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
        />
      </div>
    </>
  );
};
