import type { TouristAttraction } from '@/types';
import { MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import Image from 'next/image';

interface AttractionCardProps {
  attraction: TouristAttraction;
}


export default function AttractionCard({ attraction }: AttractionCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <CardHeader className="relative h-48 w-full p-0">
        <Image
          src={attraction.photoUrl}
          alt={attraction.name}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <Badge>
            {attraction.category.charAt(0).toUpperCase() +
              attraction.category.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <CardTitle className="mb-2 text-lg">{attraction.name}</CardTitle>
        <CardDescription className="line-clamp-4">
          {attraction.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-1.5 h-4 w-4" /> {attraction.distanceFromVenue}{' '}
          from venue
        </div>
      </CardFooter>
    </Card>
  );
}
