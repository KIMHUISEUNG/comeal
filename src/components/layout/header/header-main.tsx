import { memo } from "react";
import { Link } from "react-router";
import logo from "@/assets/Desktop/Header/Brand/Culture-Passport-logo 1.png";
import { InputInline } from "@/components/custom/search-input";
import { QuickActions } from "./quick-actions";

export const HeaderMain = memo(function HeaderMain() {
  return (
    <div className="flex h-20 w-full items-center justify-between gap-6">
      <div className="flex min-w-0 flex-1 items-center gap-8">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2"
          aria-label="Comeal 홈"
        >
          <img className="h-10" src={logo} alt="" />
          <div className="text-2xl font-bold">Comeal</div>
        </Link>
        <InputInline />
      </div>

      <QuickActions />
    </div>
  );
});
