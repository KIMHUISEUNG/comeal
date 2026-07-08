import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function InputInline() {
  return (
    <Field orientation="horizontal" className="max-w-xl min-w-0 flex-1">
      <Input type="search" placeholder="Search..." />
      <Button>Search</Button>
    </Field>
  );
}
