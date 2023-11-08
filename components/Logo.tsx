import { cn } from "@/lib/utils";
import { BrainCircuit } from "lucide-react";
import { Poppins } from "next/font/google";
import React from "react";
interface LogoProps {
  className?: string;
}
const poppins = Poppins({ weight: "700", subsets: ["latin"] });
export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <BrainCircuit color="#0ea5e9" size={40} />
      <span className={cn("ml-2 font-bold text-3xl", poppins.className)}>Brainfast</span>
    </div>
  );
}
