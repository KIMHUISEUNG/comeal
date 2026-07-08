import { memo } from "react";
import categoryIcon from "@/assets/Desktop/Header/Header/Header action/Icon/카테고리.svg";
import myShoppingIcon from "@/assets/Desktop/Header/Header/Header action/Icon/마이쇼핑.svg";
import cartIcon from "@/assets/Desktop/Header/Header/Header action/Icon/장바구니.svg";
import { CategoryButton } from "./category-button";
import { MyShoppingButton } from "./my-shopping-button";
import { QuickActionLink } from "./quick-action-link";

const quickActions = [
  { id: "category", label: "카테고리", to: "/categories", icon: categoryIcon },
  {
    id: "my-shopping",
    label: "마이쇼핑",
    to: "/my-shopping",
    icon: myShoppingIcon,
  },
  { id: "cart", label: "장바구니", to: "/cart", icon: cartIcon },
] as const;

export const QuickActions = memo(function QuickActions() {
  return (
    <nav
      className="flex shrink-0 items-center gap-3 sm:gap-5"
      aria-label="빠른 메뉴"
    >
      {quickActions.map((action) => {
        if (action.id === "category") {
          return (
            <CategoryButton
              key={action.id}
              icon={action.icon}
              label={action.label}
            />
          );
        }

        if (action.id === "my-shopping") {
          return (
            <MyShoppingButton
              key={action.id}
              icon={action.icon}
              label={action.label}
            />
          );
        }

        return (
          <QuickActionLink
            key={action.id}
            icon={action.icon}
            label={action.label}
            to={action.to}
          />
        );
      })}
    </nav>
  );
});
