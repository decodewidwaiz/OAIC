import { cn } from '@/lib/cn';
import { ReactNode } from 'react';
import Image from 'next/image';

export function Avatar({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}>
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt, className }: { src?: string; alt?: string; className?: string }) {
  return <Image src={src ?? '/avatar-fallback.png'} alt={alt ?? ''} className={cn('aspect-square h-full w-full', className)} width={40} height={40} />;
}

export function AvatarFallback({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}>
      {children}
    </div>
  );
}
