import React from 'react';
import { Construction } from 'lucide-react';

interface ComingSoonProps {
  pageName: string;
}

export default function ComingSoon({ pageName }: ComingSoonProps) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#F1F7FB] px-4">
      <Construction size={64} className="text-[#C84824] mb-6" />
      <h1 className="text-4xl font-bold text-[#19334A] mb-4">{pageName}</h1>
      <p className="text-xl text-[#568097] text-center max-w-md">
        We're working hard to bring you something amazing. Check back soon!
      </p>
    </div>
  );
}