import { Outlet } from "react-router";
import { CategoryTabs } from "./header/category-tabs";
import { HeaderMain } from "./header/header-main";
import { UtilityBar } from "./header/utility-bar";

export default function GlobalLayout() {
  return (
    <div className="flex flex-col">
      <header className="bg-background border-b">
        <div className="mx-auto flex w-full max-w-7xl flex-col px-12">
          <UtilityBar />
          <HeaderMain />
          <CategoryTabs />
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-7xl flex-col px-12">
        <Outlet />
      </main>
      <footer className="text-muted-foreground border-t py-10 text-center">
        @hatso
      </footer>
    </div>
  );
}
