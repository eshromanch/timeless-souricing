'use client';

import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

interface WhatsAppFloatButtonProps {
  phoneNumber: string;
  message?: string;
  position?: 'left' | 'right';
  bottomMargin?: string;
  rightMargin?: string;
  leftMargin?: string;
  showText?: boolean;
  text?: string;
  iconSize?: number;
  buttonSize?: 'sm' | 'default' | 'lg';
  animation?: 'none' | 'pulse' | 'bounce';
  zIndex?: number;
}

export default function WhatsAppFloatButton({
  phoneNumber = '1234567890',
  message = 'Hello, I have a question about your services',
  position = 'right',
  bottomMargin = '24px',
  rightMargin = '24px',
  leftMargin = '24px',
  showText = false,
  text = 'Chat with us',
  iconSize = 24,
  buttonSize = 'default',
  animation = 'pulse',
  zIndex = 50,
}: WhatsAppFloatButtonProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const positionStyles = {
    right: { right: rightMargin },
    left: { left: leftMargin },
  };

  const sizeClasses = {
    sm: 'h-8 px-3',
    default: 'h-10 px-4',
    lg: 'h-12 px-6',
  };

  const animationClasses = {
    none: '',
    pulse: 'animate-pulse hover:animate-none',
    bounce: 'animate-bounce hover:animate-none',
  };

  return (
    <div
      className={`fixed bottom-[${bottomMargin}] ${position}-[${position === 'right' ? rightMargin : leftMargin}] z-[${zIndex}]`}
      style={{
        bottom: bottomMargin,
        ...positionStyles[position],
        zIndex,
      }}
    >
      <Button
        onClick={handleClick}
        className={`${sizeClasses[buttonSize]} ${animationClasses[animation]} bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg transition-all duration-300 flex items-center gap-2`}
      >
        <Phone size={iconSize} />
        {showText && <span>{text}</span>}
      </Button>
    </div>
  );
}