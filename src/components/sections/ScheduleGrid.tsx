'use client';

import { schedule } from '@/data/program';
import { Badge } from '@/components/ui/Badge';
import { Clock, MapPin, Mic } from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/Tabs';
import {
  Card,

} from '@/components/ui/Card';

const dayLabels: Record<number, string> = {
  1: 'Day 1',
  2: 'Day 2',
  3: 'Day 3',
};



export default function ScheduleGrid() {
  return (
    <Tabs defaultValue="Day 1">
      <TabsList className="mb-6 grid w-full grid-cols-3">
        {[1, 2, 3].map((day) => (
          <TabsTrigger key={day} value={`Day ${day}`}>
            {dayLabels[day]}
          </TabsTrigger>
        ))}
      </TabsList>

      {[1, 2, 3].map((day) => {
        const daySlots = schedule.filter((s) => s.day === day);
        return (
          <TabsContent key={day} value={`Day ${day}`}>
            <div className="space-y-6">
              {daySlots.map((slot, i) => (
                <Card key={i} className="flex flex-col md:flex-row">
                  <div className="p-6 md:w-48 md:flex-shrink-0 md:border-r">
                    <div className="flex items-center gap-2 font-mono text-lg">
                      <Clock className="h-5 w-5" />
                      {slot.time}
                    </div>
                  </div>
                  <div className="flex-1 p-6 pt-0 md:pt-6">
<Badge className="mb-2">
                      {slot.type}
                    </Badge>
                    <h3 className="text-lg font-semibold">{slot.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                      {slot.room && (
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" /> {slot.room}
                        </span>
                      )}
                      {slot.speaker && (
                        <span className="flex items-center gap-1.5">
                          <Mic className="h-4 w-4" /> {slot.speaker}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
