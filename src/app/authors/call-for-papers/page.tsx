import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { topics, submissionTypes } from '@/data/callForPapers';
import { Badge } from '@/components/ui/Badge';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import {
  Card,
  CardContent,
  
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FileText, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Call for Papers',
  description:
    'OAIC 2024 invites original research contributions across all areas of artificial intelligence.',
};

export default function CallForPapersPage() {
  return (
    <>
      <PageHeader
        title="Call for Papers"
        description="OAIC 2024 invites original, unpublished research contributions across all areas of artificial intelligence."
        breadcrumbs={[
          { href: '/authors/call-for-papers', label: 'Call for Papers' },
        ]}
      />

      <Section>
        <div className="mx-auto max-w-6xl">
          <Card className="mb-12 bg-primary-foreground/50">
            <CardContent className="p-6">
              <p className="text-lg text-muted-foreground">
                The conference solicits contributions that present original and
                unpublished work on all aspects of AI, machine learning, and
                their applications. All accepted papers will be published in the
                conference proceedings and archived in major academic
                databases.
              </p>
            </CardContent>
          </Card>

          <SectionHeader
            title="Topics of Interest"
            subtitle="We invite submissions on a wide range of topics, including but not limited to:"
            className="mb-8"
          />
          <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((t) => (
              <Card key={t.category}>
                <CardHeader>
                  <CardTitle>{t.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {t.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <SectionHeader
            title="Submission Types"
            subtitle="Choose the format that best fits your contribution."
            className="mb-8"
          />
          <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {submissionTypes.map((type) => (
              <Card
                key={type.type}
                className="flex flex-col transition hover:border-primary"
              >
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{type.type}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <Badge className="mb-2">
                    {type.pages}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button as="a" size="lg">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Submit via EasyChair
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
