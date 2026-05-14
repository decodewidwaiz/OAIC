import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import CommitteeMemberCard from '@/components/sections/CommitteeMemberCard';
import { operationsCommittee } from '@/data/committees';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Operations Committee',
  description: 'OAIC 2026 Operations Committee.',
};

export default function OperationsCommitteePage() {
  return (
    <>
      <PageHeader
        title="Operations Committee"
        description="The team managing logistics, venues, and day-to-day conference operations."
        breadcrumbs={[
          { href: '/committees/operations', label: 'Operations Committee' },
        ]}
      />
      <Section>
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {operationsCommittee.map((member) => (
              <CommitteeMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
