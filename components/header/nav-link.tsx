"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname === path;
  };

  return (
    <Link 
      className={cn(
        'text-sm font-semibold transition-colors hover:text-blue-700 text-gray-800 hover:bg-white/20 px-3 py-2 rounded-lg',
        isActive(href) && 'text-blue-700 bg-white/30'
      )} 
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}; 