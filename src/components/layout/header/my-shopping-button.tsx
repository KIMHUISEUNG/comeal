import { memo } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { quickActionClassName } from "./quick-action-styles";

type MyShoppingButtonProps = {
  icon: string;
  label: string;
};

const myShoppingItems = ["찜한 상품", "구독 관리", "리뷰 작성"];
const myShoppingSecondaryItems = ["주문/배송내역", "쿠폰"];

export const MyShoppingButton = memo(function MyShoppingButton({
  icon,
  label,
}: MyShoppingButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button
            type="button"
            className={quickActionClassName}
          >
            <img
              className="h-6 w-6 object-contain"
              src={icon}
              alt=""
              aria-hidden="true"
            />
            <span>{label}</span>
          </button>
        }
      />
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuGroup>
          <DropdownMenuLabel>마이 쇼핑 홈</DropdownMenuLabel>
          {myShoppingItems.map((item) => (
            <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {myShoppingSecondaryItems.map((item) => (
          <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
});
