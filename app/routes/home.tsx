import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import CorePromo from "~/components/CorePromo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jaydot2 LLC" },
    { name: "description", content: "Welcome to Jaydot2!" },
  ];
}

export default function Home() {
  return (
    <div>      
        <Welcome />
        <CorePromo />
    </div>
  );
}
