import type { CommitteeMember } from '@/types';
import { User } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  
  CardTitle,
} from '@/components/ui/Card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';

interface CommitteeMemberCardProps {
  member: CommitteeMember;
}

export default function CommitteeMemberCard({
  member,
}: CommitteeMemberCardProps) {
  return (
    <Card className="text-center">
      <CardContent className="p-6">
        <Avatar className="mx-auto mb-4 h-20 w-20">
          {member.image ? (
            <AvatarImage src={member.image} alt={member.name} />
          ) : null}
          <AvatarFallback>
            <User className="h-8 w-8 text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
        <CardTitle className="text-base">{member.name}</CardTitle>
        <CardDescription>{member.role}</CardDescription>
      </CardContent>
      <CardFooter className="p-4">
        <p className="w-full text-xs text-muted-foreground">
          {member.institution}
        </p>
      </CardFooter>
    </Card>
  );
}
