import { LogOut } from "lucide-react";
import Image from "next/image";

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <div className="relative h-10 w-10 rounded-full overflow-hidden">
        <Image src="https://github.com/EsterZanato.png" fill alt="Profile" />
      </div>
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Ester Zanato</span>
        <span className="truncate text-sm text-zinc-500">
          example@hotmail.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  );
}