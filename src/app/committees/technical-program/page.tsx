import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import CommitteeMemberCard from '@/components/sections/CommitteeMemberCard';
import { technicalProgramCommittee } from '@/data/committees';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Technical Program Committee',
  description:
    'Meet the technical program committee responsible for reviewing submissions to OAIC 2026.',
};

export default function TechnicalProgramCommitteePage() {
  return (
    <>
      <PageHeader
        title="Technical Program Committee"
        description="Leading experts who review and curate the OAIC 2026 research program."
        breadcrumbs={[
          {
            href: '/committees/technical-program',
            label: 'Technical Program Committee',
          },
        ]}
      />
      <Section>
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {technicalProgramCommittee.map((member) => (
              <CommitteeMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
