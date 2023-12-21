import * as React from "react";

type BadgeProps = {
  isPill?: boolean;
  badgeText?: string;
  badgeColor?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
};

export const Badge = (props: BadgeProps) => {
  function renderPill(isPill: boolean) {
    if (isPill) {
      return "rounded-full";
    } else {
      return "rounded-md";
    }
  }
  function renderBadgeColor(textColor: string) {
    switch (textColor) {
      case "primary":
        return "bg-blue-50 text-blue-700 ring-blue-500/10";
      case "secondary":
        return "bg-gray-50 text-gray-700 ring-gray-500/10";
      case "success":
        return "bg-green-50 text-green-700 ring-green-500/10";
      case "danger":
        return "bg-red-50 text-red-700 ring-red-500/10";
      case "warning":
        return "bg-yellow-50 text-yellow-700 ring-yellow-500/10";
      case "info":
        return "bg-blue-50 text-blue-700 ring-blue-500/10";
      case "light":
        return "bg-gray-50 text-gray-700 ring-gray-500/10";
      case "dark":
        return "bg-gray-50 text-gray-700 ring-gray-500/10";
      default:
        return "bg-gray-50 text-gray-700 ring-gray-500/10";
    }
  }
  return (
    <span
      className={`inline-flex items-center ${renderPill(
        props.isPill || false
      )} ${renderBadgeColor(
        props.badgeColor || "primary"
      )} px-2 py-1 text-xs font-medium ring-1 ring-inset`}
    >
      {props.badgeText}S
    </span>
  );
};
