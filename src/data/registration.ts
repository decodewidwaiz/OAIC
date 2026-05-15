import type { PricingTier } from '@/types';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Early Bird',
    cutoff: 'September 15, 2026',
    rows: [
      { category: 'Student (Indian)', amount: 'TBD', currency: 'INR' },
      { category: 'Academic (Indian)', amount: 'TBD', currency: 'INR' },
      { category: 'Industry (Indian)', amount: 'TBD', currency: 'INR' },
      { category: 'International', amount: 'TBD', currency: 'USD' },
    ],
  },
  {
    name: 'Regular',
    cutoff: 'October 10, 2026',
    rows: [
      { category: 'Student (Indian)', amount: 'TBD', currency: 'INR' },
      { category: 'Academic (Indian)', amount: 'TBD', currency: 'INR' },
      { category: 'Industry (Indian)', amount: 'TBD', currency: 'INR' },
      { category: 'International', amount: 'TBD', currency: 'USD' },
    ],
  },
  {
    name: 'On-Site',
    cutoff: 'Conference Day',
    rows: [
      { category: 'Student (Indian)', amount: 'TBD', currency: 'INR' },
      { category: 'Academic (Indian)', amount: 'TBD', currency: 'INR' },
      { category: 'Industry (Indian)', amount: 'TBD', currency: 'INR' },
      { category: 'International', amount: 'TBD', currency: 'USD' },
    ],
  },
];

export const registrationIncludes = [
  'Access to all technical sessions',
  'Conference proceedings (digital)',
  'Welcome reception & banquet dinner',
  'Morning/afternoon coffee breaks',
  'Conference kit & badge',
];

export const registrationExcludes = [
  'Accommodation (see Travel page)',
  'Transportation to/from venue',
  'Tourist excursions',
  'Workshop fee (separate registration)',
];
