"use client";

import { IconHome } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const params = usePathname();

  return (
    <div>
      <h2>
        Not Found:{" "}
        <span className="not-italic bg-slate-700 rounded px-1">{params}</span>
      </h2>
      <p>Could not find requested resource</p>
      <Link
        className="cursor-pointer bg-sky-500 rounded w-fit p-2 text-white hover:bg-sky-600 transition flex gap-2"
        href="/"
      >
        <IconHome /> <span>Go home</span>
      </Link>
    </div>
  );
}
