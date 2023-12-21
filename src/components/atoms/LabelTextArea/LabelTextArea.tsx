import * as React from "react";

type LabelTextAreaProps = {
  name?: string;
  id?: string;
  rows?: number;
  defaultValue?: string;
  placeholder?: string;
  labelText?: string;
  hasLabel?: boolean;
};

export const LabelTextArea = (props: LabelTextAreaProps) => {
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
        <textarea
          rows={props.rows || 4}
          name={props.name}
          id={`${props.name}Input`}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={props.defaultValue}
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};
