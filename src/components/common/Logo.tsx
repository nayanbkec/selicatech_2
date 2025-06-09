import React from 'react';
import { Code, Zap } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-8 w-8' }) => {
  return (
    <div className={`${className} relative flex items-center justify-center`}>
      <div className="relative">
        {/* Main icon */}
        <Code 
          className="h-full w-full text-primary-600 dark:text-primary-400" 
          strokeWidth={2} 
        />
        
        {/* Accent element */}
        <div className="absolute -top-1 -right-1">
          <Zap 
            className="h-1/2 w-1/2 text-accent-500 dark:text-accent-400" 
            strokeWidth={2.5} 
            fill="currentColor"
          />
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full opacity-20 blur-sm animate-pulse" />
      </div>
    </div>
  );
};

export default Logo;