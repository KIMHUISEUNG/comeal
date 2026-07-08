import { memo } from "react";
import { Link } from "react-router";
import { quickActionClassName } from "./quick-action-styles";

type QuickActionLinkProps = {
  icon: string;
  label: string;
  to: string;
};

export const QuickActionLink = memo(function QuickActionLink({
  icon,
  label,
  to,
}: QuickActionLinkProps) {
  return (
    <Link to={to} className={quickActionClassName}>
      <img
        className="h-6 w-6 object-contain"
        src={icon}
        alt=""
        aria-hidden="true"
      />
      <span>{label}</span>
    </Link>
  );
});
