"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

const ThemeToggle = () => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
    <DropdownMenuContent>
        <div onClick={() => setTheme("light")}>
            Light
        </div>
        <div onClick={() => setTheme("dark")}>
            Dark
        </div>
        <div onClick={() => setTheme("system")}>
            System
        </div>
    </DropdownMenuContent>
    </DropdownMenu>
  )
}


export default ThemeToggle