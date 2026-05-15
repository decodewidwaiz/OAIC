import Image from 'next/image';
import type { CommitteeMember } from '@/types';
import { User, Building2 } from 'lucide-react';

interface CommitteeMemberCardProps {
  member: CommitteeMember;
}

export default function CommitteeMemberCard({
  member,
}: CommitteeMemberCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
      {/* Top Accent Bar */}
      <div className="h-2 w-full bg-primary-400 group-hover:bg-primary-600 transition-colors duration-300" />
      
      <div className="p-6 flex flex-col items-center flex-1">
        {/* Avatar Area */}
        <div className="relative mb-5">
          <div className="h-24 w-24 rounded-full overflow-hidden bg-primary-50 ring-4 ring-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
            {member.image ? (
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            ) : (
              <User className="h-10 w-10 text-primary-300" />
            )}
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center w-full flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-primary-900 mb-1 leading-tight">{member.name}</h3>
          <p className="text-sm font-bold text-primary-500 mb-4">{member.role}</p>
          
          <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-center w-full">
            <Building2 className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
            <p className="text-xs text-gray-600 font-medium line-clamp-2">
              {member.institution}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
