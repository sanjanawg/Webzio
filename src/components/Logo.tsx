import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div className={`${sizeClasses[size]} bg-gradient-hero rounded-full flex items-center justify-center shadow-elegant`}>
        <span className={`font-bold text-white ${textSizeClasses[size]}`}>W</span>
      </div>
      <span className={`font-bold text-foreground ${textSizeClasses[size]}`}>Webzio</span>
    </div>
  );
};

export default Logo;