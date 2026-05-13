import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import {
  Calendar,
  FileDown,
  Check,
  
} from 'lucide-react';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import {
  Card,
  CardContent,
  
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Call for Workshop Proposals',
  description:
    'Submit your workshop proposal for OAIC 2024. We welcome industry and academic workshops on AI topics.',
};

const proposalTopics = [
  'Workshop title and acronym',
  'Organiser names, affiliations, and contact details',
  'Workshop scope and topics (500 words max)',
  'Format: half-day or full-day, invited speakers, papers',
  'Target audience and expected attendance',
  'Brief organiser biographies',
  'Workshop website URL (if available)',
  'History of previous editions (if applicable)',
];

const keyDates = [
  { date: 'June 30, 2024', event: 'Workshop Proposal Deadline' },
  { date: 'July 20, 2024', event: 'Acceptance Notification' },
  { date: 'August 15, 2024', event: 'Workshop Paper Deadline' },
  { date: 'September 15, 2024', event: 'Workshop Camera-Ready' },
  { date: 'October 15–17, 2024', event: 'Workshop Days' },
];

export default function WorkshopProposalsPage() {
  return (
    <>
      <PageHeader
        title="Call for Workshop Proposals"
        description="Organise a focused workshop at OAIC 2024 on your AI research area or industry application."
        breadcrumbs={[
          {
            href: '/authors/call-for-workshop-proposals',
            label: 'Call for Workshop Proposals',
          },
        ]}
      />
      <Section className="pb-24">
        <div className="mx-auto max-w-6xl">
          <Card className="mb-12 bg-primary-foreground/50">
            <CardHeader>
              <CardTitle className="text-2xl">What is a Workshop?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                Workshops at OAIC 2024 are half-day or full-day focused events
                co-located with the main conference. They provide a platform for
                in-depth discussions on emerging or specialised AI topics,
                bringing together researchers and practitioners with shared
                interests.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <SectionHeader
                title="Proposal Guidelines"
                subtitle="What to include"
                className="mb-6"
              />
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {proposalTopics.map((item) => (
                      <li key={item} className="flex items-start">
                        <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <SectionHeader
                title="Key Dates"
                subtitle="Timeline"
                className="mb-6"
              />
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {keyDates.map((d) => (
                      <div key={d.event} className="flex items-center">
                        <Calendar className="mr-3 h-5 w-5 text-primary" />
                        <div className="flex-1">
                          <p className="font-semibold">{d.event}</p>
                          <p className="text-sm text-muted-foreground">
                            {d.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Button as="a" size="lg">
                <a href="#">Submit Workshop Proposal</a>
              </Button>
              <Button as="a" size="lg" variant="secondary">
                <a href="#">
                  <FileDown className="mr-2 h-4 w-4" />
                  Download Template
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
