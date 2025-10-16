import Image from "next/image";
import Link from "next/link";
interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link 
      href="/" 
      title="Página Inicial"
      className={`text-white font-bold text-xl hover:text-gray-300 transition-colors py-1 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
            <Image 
              src="/logo.png" 
              alt="Logo LINC" 
              width={40} 
              height={40} 
              className="object-contain object-center" 
            />
          </div>
        </div>
        <span className="text-white font-bold text-xl">LINC</span>
      </div>
    </Link>
  );
}; 