import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { importantDates } from '@/data/dates';
import { Badge } from '@/components/ui/Badge';
import { Calendar, AlertTriangle } from 'lucide-react';
import Section from '@/components/layout/Section';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';

export const metadata: Metadata = {
  title: 'Important Dates',
  description:
    'Key deadlines for paper submission, notification, camera-ready, and registration for OAIC 2024.',
};


export default function ImportantDatesPage() {
  return (
    <>
      <PageHeader
        title="Important Dates"
        description="Plan ahead — these deadlines are firm. Mark them in your calendar."
        breadcrumbs={[
          { href: '/authors/important-dates', label: 'Important Dates' },
        ]}
      />
      <Section>
        <div className="mx-auto max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Key Deadlines</CardTitle>
              <CardDescription>
                All deadlines are at 11:59 PM AoE (Anywhere on Earth).
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flow-root">
                <ul className="-mb-8">
                  {importantDates.map((date, i) => (
                    <li key={i}>
                      <div className="relative pb-8">
                        {i !== importantDates.length - 1 ? (
                          <span
                            className="absolute left-5 top-4 -ml-px h-full w-0.5 bg-border"
                            aria-hidden="true"
                          />
                        ) : null}
                        <div className="relative flex items-start space-x-4">
                          <div>
                            <div className="relative px-1">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary ring-8 ring-background">
                                <Calendar className="h-5 w-5 text-secondary-foreground" />
                              </div>
                            </div>
                          </div>
                          <div className="min-w-0 flex-1 py-1.5">
                            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                              <p className="font-semibold text-foreground">
                                {date.event}
                              </p>
                              <div className="flex items-center gap-4">
                                <time
                                  dateTime={date.date}
                                  className="flex-shrink-0 text-sm font-medium text-muted-foreground"
                                >
                                  {date.date}
                                </time>
<Badge className="w-24 justify-center">
                                  {date.status.charAt(0).toUpperCase() +
                                    date.status.slice(1)}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Alert className="mt-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Note on Deadlines</AlertTitle>
            <AlertDescription>
              All deadlines are at{' '}
              <strong className="font-semibold">
                11:59 PM AoE (Anywhere on Earth)
              </strong>
              . Extensions, if any, will be announced on this page and via
              email to registered authors. We strongly encourage early
              submissions.
            </AlertDescription>
          </Alert>
        </div>
      </Section>
    </>
  );
}
