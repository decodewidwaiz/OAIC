import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import AttractionCard from '@/components/sections/AttractionCard';
import { touristAttractions } from '@/data/attractions';
import Section from '@/components/layout/Section';
import { UtensilsCrossed, Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tourist Attractions',
  description:
    "Explore Odisha's magnificent heritage, nature, and culture while attending OAIC 2026.",
};

const cuisine = [
  {
    name: 'Dalma',
    desc: 'The quintessential Odishan comfort dish - lentils slow-cooked with seasonal vegetables.',
  },
  {
    name: 'Pakhala Bhata',
    desc: 'Fermented rice soaked in water, a summer staple served with sides.',
  },
  {
    name: 'Chhena Poda',
    desc: "Odisha's signature dessert - a caramelized cottage cheese cake.",
  },
  {
    name: 'Rasagola',
    desc: 'A classic sweet, with a GI tag for its origin in Odisha.',
  },
];

export default function AttractionsPage() {
  return (
    <>
      <PageHeader
        title="Tourist Attractions"
        description="Bhubaneswar and Odisha offer a treasure trove of history, nature, and culture to explore."
        breadcrumbs={[
          { href: '/travel/attractions', label: 'Tourist Attractions' },
        ]}
      />

      <Section className="bg-[#fafafa] relative overflow-hidden pt-16 pb-20">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#08283C 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="container-wide relative max-w-7xl">
          
          {/* Explore Odisha Section */}
          <div className="mb-20">
            <div className="relative mb-10 max-w-3xl">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#0C527D] font-bold mb-3">
                <Compass className="w-4 h-4 text-[#3A8EC2]" />
                Discover Heritage
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#08283C] tracking-tight leading-tight mb-4">
                Explore Odisha
              </h2>
              <div className="w-16 h-1 bg-[#0C527D] mb-6"></div>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl">
                World-class heritage sites and natural wonders, all within reach of Bhubaneswar. Experience the architectural marvels of the &quot;Temple City&quot; and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {touristAttractions.map((attraction) => (
                <AttractionCard key={attraction.name} attraction={attraction} />
              ))}
            </div>
          </div>

          {/* Taste of Odisha Section */}
          <div className="animate-fade-in-up">
            <div className="relative mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-l-4 border-[#08283C] pl-6 md:pl-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#0C527D] font-bold mb-3">
                  <UtensilsCrossed className="w-4 h-4 text-[#3A8EC2]" />
                  Culinary Showcase
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#08283C] tracking-tight">
                  Taste of Odisha
                </h2>
                <p className="mt-4 text-sm md:text-base text-gray-500 leading-relaxed italic">
                  Don&apos;t leave without trying these signature local delicacies that define the region&apos;s rich culinary heritage.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 p-px">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]">
                {cuisine.map((dish) => (
                  <div key={dish.name} className="bg-white p-8 space-y-4 hover:bg-gray-50/50 transition-colors group">
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase tracking-widest text-[#3A8EC2] font-bold">Signature Dish</div>
                      <h3 className="text-xl font-serif font-bold text-[#08283C] group-hover:text-[#0C527D] transition-colors">{dish.name}</h3>
                    </div>
                    <div className="w-6 h-0.5 bg-gray-100 group-hover:w-full group-hover:bg-[#3A8EC2]/20 transition-all duration-500"></div>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {dish.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Section>
    </>
  );}