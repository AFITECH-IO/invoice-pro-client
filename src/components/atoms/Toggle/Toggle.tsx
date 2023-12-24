import * as React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { classNames } from "~src/utils";

type ToggleProps = {
  isEnable: boolean;
  onChange: (val: boolean) => void;
};

export const Toggle = (props: ToggleProps) => {
  const [enabled, setEnabled] = useState(props.isEnable);
  function onChange() {
    setEnabled(!enabled);
    props.onChange(!enabled);
  }
  return (
    <Switch
      checked={enabled}
      onChange={onChange}
      className={classNames(
        enabled ? "bg-purple-600" : "bg-gray-200",
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
      )}
    >
      <span className="sr-only">Use toggle</span>
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? "translate-x-5" : "translate-x-0",
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        )}
      />
    </Switch>
  );
};
