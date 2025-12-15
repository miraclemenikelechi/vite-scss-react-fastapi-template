import { cn } from "./lib/utils";

export default function App() {
  return (
    <div className={cn(`text-2xl font-bold`, "say__hello")}>hello world</div>
  );
}
