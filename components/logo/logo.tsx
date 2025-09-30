import Image from "next/image";
import Link from "next/link";
interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link 
      href="/" 
      title="LINC Academy | Página Inicial"
      className={`text-gray-800 font-bold text-xl hover:text-blue-700 transition-colors py-1 ${className}`}
    >
      <Image src="/logo.png" alt="Logo" width={60} height={60} className="object-contain" />
    </Link>
  );
}; 