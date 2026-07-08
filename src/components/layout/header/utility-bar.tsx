import { memo } from "react";
import { Link } from "react-router";

const utilityLinks = [
  { label: "로그인", to: "/login" },
  { label: "멤버십", to: "/membership" },
  { label: "고객센터", to: "/customer" },
  { label: "장바구니", to: "/cart" },
] as const;

export const UtilityBar = memo(function UtilityBar() {
  return (
    <div className="text-muted-foreground hidden h-9 items-center justify-end text-xs md:flex">
      <nav className="flex items-center gap-3" aria-label="유틸리티 메뉴">
        {utilityLinks.map((item) => (
          <Link key={item.to} to={item.to} className="hover:text-foreground">
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
});
