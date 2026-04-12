"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-5">
      <h1 className="text-xl font-bold">Jatin Patial</h1>
      <ThemeToggle />
    </nav>
  );
}