import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import {
  Card,
  CardContent,
  
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Check, Calendar } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/Alert';

export const metadata: Metadata = {
  title: 'Call for Poster Presentations',
  description:
    'Submit your poster abstract for OAIC 2024. Share your work-in-progress and get feedback from the community.',
};

const formatRequirements = [
  'Size: A0 Portrait (841 × 1189 mm)',
  'Language: English',
  'Include: Title, authors, abstract, methodology, results',
  'QR code linking to paper/preprint (optional)',
  'High-contrast colours for readability',
  'Font size: minimum 24pt for body text',
];

const submissionInstructions = [
  'Submit a 2–4 page extended abstract',
  'IEEE double-column format required',
  'Submit via EasyChair portal',
  'Include "Poster:" prefix in the title',
  'Accepted posters receive participation certificate',
  'Best Poster Award presented at closing ceremony',
];

export default function CallForPostersPage() {
  return (
    <>
      <PageHeader
        title="Call for Poster Presentations"
        description="Share your research in progress and engage directly with the AI community."
        breadcrumbs={[
          {
            href: '/authors/call-for-posters',
            label: 'Call for Poster Presentations',
          },
        ]}
      />
      <Section className="pb-24">
        <div className="mx-auto max-w-6xl">
          <Card className="mb-12 bg-primary-foreground/50">
            <CardHeader>
              <CardTitle className="text-2xl">
                About Poster Presentations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                Poster presentations at OAIC 2024 offer an excellent
                opportunity to present your early-stage or work-in-progress
                research to a diverse audience of AI researchers and
                practitioners. The interactive format encourages direct
                discussion and valuable feedback.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <SectionHeader
                title="Poster Format"
                subtitle="Requirements"
                className="mb-6"
              />
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {formatRequirements.map((item) => (
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

            <div>
              <SectionHeader
                title="Submission"
                subtitle="Instructions"
                className="mb-6"
              />
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {submissionInstructions.map((item) => (
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
          </div>

          <Alert className="mt-12">
            <Calendar className="h-4 w-4" />
            <AlertTitle>Key Date</AlertTitle>
            <AlertDescription>
              Poster Submission Deadline:{' '}
              <strong className="font-semibold">August 1, 2024</strong>
            </AlertDescription>
          </Alert>

          <div className="mt-12 text-center">
            <Button as="a" size="lg">
              <a href="#">Submit Poster Abstract</a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
