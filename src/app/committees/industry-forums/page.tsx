import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import CommitteeMemberCard from '@/components/sections/CommitteeMemberCard';
import { industryForumsCommittee } from '@/data/committees';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Industry Forums & Exhibition Committee',
  description: 'OAIC 2026 Industry Forums and Exhibition Committee.',
};

export default function IndustryForumsCommitteePage() {
  return (
    <>
      <PageHeader
        title="Industry Forums & Exhibition Committee"
        description="Connecting academia and industry through exhibitions, forums, and networking events."
        breadcrumbs={[
          {
            href: '/committees/industry-forums',
            label: 'Industry Forums Committee',
          },
        ]}
      />
      <Section>
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {industryForumsCommittee.map((member) => (
              <CommitteeMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
