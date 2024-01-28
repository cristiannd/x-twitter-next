"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    {
      name: "Home",
      href: "/",
      isSelect: false,
    },
    {
      name: "Perfil",
      href: "/profile",
      isSelect: false,
    },
  ];

  const linksToShow = links.map((link) =>
    link.href === pathname ? { ...link, isSelect: true } : link,
  );

  console.log(linksToShow);

  const selectedStyle = "bg-sky-700 py-3";

  return (
    <nav className="flex gap-1">
      {linksToShow.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`h-fit w-auto rounded-b p-2 font-bold hover:bg-sky-500 ${link.isSelect ? "bg-sky-500 pt-3" : "bg-gray-300 text-gray-800"}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
