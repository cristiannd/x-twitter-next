"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    {
      name: "Home",
      href: "/",
    },
  ];

  const linksToShow = links.filter((link) => link.href !== pathname);

  return (
    <nav>
      {linksToShow.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
