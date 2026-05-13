import type { Workshop } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Clock, MapPin, Users } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

interface WorkshopCardProps {
  workshop: Workshop;
}

export default function WorkshopCard({ workshop }: WorkshopCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge>Workshop</Badge>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" /> Day {workshop.day} — {workshop.time}
          </span>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> {workshop.room}
          </span>
        </div>
        <CardTitle>{workshop.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="line-clamp-4">
          {workshop.abstract}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <Users className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>{workshop.organizers.join(', ')}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
