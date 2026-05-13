import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import WorkshopCard from '@/components/sections/WorkshopCard';
import { workshops } from '@/data/program';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Workshops',
  description:
    'Co-located workshops at OAIC 2024 covering hands-on AI topics.',
};

export default function WorkshopsPage() {
  return (
    <>
      <PageHeader
        title="Workshops"
        description="Intensive, focused workshops on cutting-edge AI topics, co-located with the main conference."
        breadcrumbs={[{ href: '/program/workshops', label: 'Workshops' }]}
      />
      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((w) => (
            <WorkshopCard key={w.id} workshop={w} />
          ))}
        </div>
      </Section>
    </>
  );
}
