'use client';

import { useState } from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export default function AnimatedCard({ 
  children, 
  className = '', 
  hoverEffect = true,
  onClick 
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        bg-white rounded-lg shadow-md p-6 transition-all duration-300
        ${hoverEffect ? 'hover:shadow-xl hover:-translate-y-1' : ''}
        ${isHovered && hoverEffect ? 'shadow-xl -translate-y-1' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </div>
  );
} 