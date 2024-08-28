"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/men" },
  { name: "Women", href: "/women" },
  { name: "Teens", href: "/teens" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 sm:max-w-4xl lg:max-w-7xl">
        <Link href={"/"}>
          <h1 className="text-2xl md:text-4xl font-bold">
            Next<span className="text-primary">Mart</span>
          </h1>
        </Link>

        <nav className="hidden gap-12 md:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <Link
              href={link.href}
              className={`${pathname === link.href ? "text-primary" : "text-gray-600"} text-lg font-semibold transition duration-100 hover:text-primary`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex divide-x border-r border-l">
          <Button
            variant={"outline"}
            className="flex flex-col rounded-none h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24"
          >
            <ShoppingBag className="text-primary" />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
