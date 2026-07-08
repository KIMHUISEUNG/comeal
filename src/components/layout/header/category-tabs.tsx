import { memo } from "react";
import { NavLink } from "react-router";

const categoryTabs = [
  { label: "홈", to: "/" },
  { label: "오늘행사", to: "/deals" },
  { label: "FOR YOU", to: "/for-you" },
  { label: "베스트", to: "/best" },
  { label: "N배송", to: "/delivery" },
  { label: "패션뷰티", to: "/fashion-beauty" },
  { label: "쇼핑라이브", to: "/live" },
  { label: "장보기", to: "/grocery" },
  { label: "쿠폰/혜택", to: "/benefits" },
] as const;

export const CategoryTabs = memo(function CategoryTabs() {
  return (
    <nav aria-label="카테고리 메뉴">
      <div className="flex h-12 w-full items-center overflow-x-auto">
        <div className="flex min-w-max items-center gap-7">
          {categoryTabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.to === "/"}
              className={({ isActive }) =>
                [
                  "relative flex h-12 items-center text-sm font-medium whitespace-nowrap",
                  isActive
                    ? "text-primary font-bold"
                    : "text-foreground hover:text-primary",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  {tab.label}
                  {isActive && (
                    <span className="bg-primary absolute right-0 bottom-0 left-0 h-0.5 rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
});
