import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/Tabs';
import { FileDown, AlertTriangle } from 'lucide-react';
import Section from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';

export const metadata: Metadata = {
  title: 'Submission Guidelines',
  description:
    'Everything you need to know to prepare and submit your paper to OAIC 2024.',
};

function GeneralGuidelines() {
  return (
    <div className="prose">
      <p>
        All papers submitted to OAIC 2024 must be original, unpublished work not
        currently under review at any other venue. Submissions must be in
        English and comply with the IEEE double-column conference format.
      </p>
      <ul>
        {[
          'Papers must not exceed the specified page limits (excluding references).',
          'All submissions will undergo a double-blind peer review process.',
          'Authors must anonymize their submissions, removing names, affiliations, and acknowledgements.',
          'Self-citations should be minimized and written in the third person to maintain anonymity.',
          'Submitted papers must not be under review elsewhere simultaneously.',
          'At least one author of an accepted paper must register for the conference and present the paper.',
        ].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function FormattingGuidelines() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {[
          { label: 'Format', value: 'IEEE double-column, A4' },
          { label: 'Full Paper Length', value: '8–10 pages (+ refs)' },
          { label: 'Short Paper Length', value: '4–6 pages (+ refs)' },
          { label: 'Font', value: 'Times New Roman, 10pt' },
          { label: 'File Format', value: 'PDF only' },
          { label: 'File Size Limit', value: '10 MB' },
        ].map((spec) => (
          <Card key={spec.label}>
            <CardContent className="p-4">
              <p className="text-sm font-medium text-muted-foreground">
                {spec.label}
              </p>
              <p className="font-semibold">{spec.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        <Button as="a">
          <a href="#">
            <FileDown className="mr-2 h-4 w-4" /> LaTeX Template
          </a>
        </Button>
        <Button as="a" variant="secondary">
          <a href="#">
            <FileDown className="mr-2 h-4 w-4" /> Word Template
          </a>
        </Button>
      </div>
    </div>
  );
}

function EthicsPolicy() {
  return (
    <div className="space-y-6">
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Commitment to Integrity</AlertTitle>
        <AlertDescription>
          OAIC 2024 is committed to the highest standards of publication ethics
          and takes all forms of misconduct seriously, including plagiarism,
          data fabrication, and improper authorship.
        </AlertDescription>
      </Alert>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {[
          {
            title: 'Plagiarism',
            desc: 'All submissions are checked using plagiarism detection software. Papers with significant overlap will be rejected.',
          },
          {
            title: 'Authorship',
            desc: 'All listed authors must have made a substantial contribution. Ghostwriting and honorary authorship are not permitted.',
          },
          {
            title: 'AI-Assisted Writing',
            desc: 'Authors must disclose the use of AI writing tools. AI tools may not be listed as authors.',
          },
          {
            title: 'Data Integrity',
            desc: 'Authors must preserve research data and provide access upon reasonable request by reviewers.',
          },
        ].map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function CameraReady() {
  return (
    <div className="prose">
      <p>
        After acceptance, authors must prepare and submit the camera-ready
        version by{' '}
        <strong className="font-semibold">September 10, 2024</strong>.
      </p>
      <ul>
        {[
          'Address all reviewer comments in the final version.',
          'Include author names and affiliations (no longer anonymized).',
          'Add acknowledgements section if applicable.',
          'Ensure PDF is IEEE Xplore compliant (use IEEE PDF eXpress).',
          'Submit the signed IEEE Copyright Form.',
          'Upload all materials via the submission system by the deadline.',
        ].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const TABS = [
  { value: 'general', label: 'General Guidelines', component: GeneralGuidelines },
  { value: 'formatting', label: 'Formatting', component: FormattingGuidelines },
  { value: 'ethics', label: 'Ethics Policy', component: EthicsPolicy },
  { value: 'camera-ready', label: 'Camera-Ready', component: CameraReady },
];

export default function SubmissionGuidelinesPage() {
  return (
    <>
      <PageHeader
        title="Submission Guidelines"
        description="Everything you need to know to prepare and submit your paper to OAIC 2024."
        breadcrumbs={[
          {
            href: '/authors/submission-guidelines',
            label: 'Submission Guidelines',
          },
        ]}
      />
      <Section className="pb-24">
        <Tabs defaultValue="general" className="mx-auto max-w-4xl">
          <TabsList>
            {TABS.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {TABS.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="pt-6">
              <tab.component />
            </TabsContent>
          ))}
        </Tabs>
      </Section>
    </>
  );
}
