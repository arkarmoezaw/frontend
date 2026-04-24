"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="w-70 bg-red-200">Sidebar</div>
      <div className="w-full">
        <div className="bg-green flex h-2/25 w-full items-center text-slate-400">
          <div>
            <div className="relative w-full sm:max-w-xs">
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <Input
                placeholder="Search orders..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="h-23/25 w-full bg-green-400">{children}</div>
      </div>
    </div>
  );
}
