import { memo } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { quickActionClassName } from "./quick-action-styles";

type CategoryButtonProps = {
  icon: string;
  label: string;
};

const categoryItems = ["가공 식품", "신선 식품", "건강 식품", "주방 용품"];

export const CategoryButton = memo(function CategoryButton({
  icon,
  label,
}: CategoryButtonProps) {
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
          <DropdownMenuLabel>국가별 식품</DropdownMenuLabel>
          {categoryItems.map((item) => (
            <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
});
