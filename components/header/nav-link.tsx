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
        'text-sm font-medium transition-colors hover:text-primary text-foreground',
        isActive(href) && 'text-primary'
      )} 
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}; 