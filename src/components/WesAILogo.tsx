import React from 'react';

interface WesAILogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  variant?: 'full' | 'icon';
}

export const WesAILogo: React.FC<WesAILogoProps> = ({ 
  className = "", 
  width, 
  height,
  variant = 'full'
}) => {
  if (variant === 'icon') {
    return (
      <svg 
        width={width || 32} 
        height={height || 32} 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="favicon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#DB2777" />
          </linearGradient>
        </defs>
        
        {/* Background Circle - Adaptive to theme via CSS */}
        <circle 
          cx="16" 
          cy="16" 
          r="15" 
          className="fill-white dark:fill-gray-800 transition-colors" 
          stroke="url(#favicon-gradient)" 
          strokeWidth="1"
        />
        
        {/* AI Brain Icon */}
        <path 
          d="M12 10C12 9.44772 12.4477 9 13 9H19C19.5523 9 20 9.44772 20 10V14C20 14.5523 19.5523 15 19 15H13C12.4477 15 12 14.5523 12 14V10Z" 
          fill="url(#favicon-gradient)" 
          opacity="0.9"
        />
        
        {/* Neural Nodes */}
        <circle cx="10" cy="20" r="1.5" fill="url(#favicon-gradient)" opacity="0.7"/>
        <circle cx="16" cy="20" r="2" fill="url(#favicon-gradient)"/>
        <circle cx="22" cy="20" r="1.5" fill="url(#favicon-gradient)" opacity="0.7"/>
        
        {/* Connections */}
        <path 
          d="M11.5 20H14.5M17.5 20H20.5" 
          stroke="url(#favicon-gradient)" 
          strokeWidth="1" 
          strokeLinecap="round" 
          opacity="0.8"
        />
      </svg>
    );
  }

  // Full Logo variant (Header)
  return (
    <svg 
      width={width || 120} 
      height={height || 40} 
      viewBox="0 0 120 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="wesai-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="50%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      
      {/* AI Brain Icon */}
      <path 
        d="M15 8C15 6.89543 15.8954 6 17 6H23C24.1046 6 25 6.89543 25 8V12C25 13.1046 24.1046 14 23 14H17C15.8954 14 15 13.1046 15 12V8Z" 
        fill="url(#wesai-gradient)" 
        opacity="0.8"
      />
      
      {/* Neural Network Nodes */}
      <circle cx="12" cy="20" r="2" fill="url(#wesai-gradient)" opacity="0.6"/>
      <circle cx="20" cy="20" r="3" fill="url(#wesai-gradient)"/>
      <circle cx="28" cy="20" r="2" fill="url(#wesai-gradient)" opacity="0.6"/>
      
      {/* Connecting Lines */}
      <path 
        d="M14 20H18M22 20H26" 
        stroke="url(#wesai-gradient)" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        opacity="0.7"
      />
      
      {/* Text: WesAI */}
      <text 
        x="35" 
        y="25" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize="24" 
        fontWeight="700" 
        fill="url(#wesai-gradient)"
      >
        WesAI
      </text>
    </svg>
  );
};
