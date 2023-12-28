import * as React from "react";

type LabelSelectProps = {
  optionItems: OptionItems[];
  name?: string;
  id?: string;
  defaultValue?: string;
  placeholder?: string;
  hasLabel?: boolean;
  hasError?: boolean;
  labelText?: string;
  onChange?: (event: React.ChangeEvent) => void;
  hasRequiredIndicator?: boolean;
  value?: string;
};

type OptionItems = {
  value: string;
  name: string;
};

export const LabelSelect = (props: LabelSelectProps) => {
  function renderOptions() {
    return props.optionItems.map((item) => {
      return (
        <option key={item.value} value={item.value}>
          {item.name}
        </option>
      );
    });
  }

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
      <select
        id={`${props.name}Input`}
        name={props.name}
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-50 bg-[#151719] ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue={props.defaultValue}
      >
        <option>{props.placeholder || "Select Option..."}</option>
        {renderOptions()}
      </select>
      {props.hasError && (
        <p className="text-red-500 text-sm mt-2">This field is required</p>
      )}
    </>
  );
};
