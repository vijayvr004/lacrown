import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { TEAM } from '../data/team';
import { getAssetUrl } from '../utils/imageUrl';

function TeamCard({ member }: { member: typeof TEAM[0] }) {
  return (
    <div className="bg-white border border-ivory-300 overflow-hidden group">
      <div className="aspect-[4/5] bg-ivory-200 overflow-hidden">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <img src="/assets/logo.png" alt="" className="h-20 w-auto opacity-20" />
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="font-sans text-xs text-gold uppercase tracking-widest mb-1">
          {member.type === 'founder' ? 'Founder' : member.type === 'faculty' ? 'International Faculty' : 'Medical Team'}
        </div>
        <h3 className="font-serif text-charcoal text-xl font-semibold mb-1">{member.name}</h3>
        <div className="font-sans text-burgundy text-sm mb-3">{member.role}</div>
        {member.qualifications.length > 0 && (
          <ul className="mb-3 space-y-1">
            {member.qualifications.map((q) => (
              <li key={q} className="font-sans text-taupe text-xs">{q}</li>
            ))}
          </ul>
        )}
        <div className="w-8 h-px bg-gold/40 mb-3" />
        <p className="font-sans text-taupe text-sm leading-relaxed line-clamp-3">{member.bio}</p>
        {member.verificationNote && (
          <div className="mt-3 flex items-start gap-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 p-2">
            <AlertCircle size={12} className="flex-shrink-0 mt-0.5" />
            <span>Pending administrator verification</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function OurTeamPage() {
  const founder = TEAM.filter((m) => m.type === 'founder');
  const doctors = TEAM.filter((m) => m.type === 'doctor');
  const faculty = TEAM.filter((m) => m.type === 'faculty');

  return (
    <div>
      <section className="relative py-24 bg-burgundy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={getAssetUrl('/images/heroes/our-team-hero.png')}
            alt="LA CROWN Team"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-luxury relative z-10">
          <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: 'Our Team' }]} light />
          <div className="section-eyebrow mt-4 mb-3">The Experts Behind LA CROWN</div>
          <h1 className="font-serif text-white text-5xl md:text-6xl leading-tight mb-5">Our Team</h1>
          <div className="w-16 h-0.5 bg-gold mb-6" />
          <p className="font-sans text-white/80 text-lg max-w-xl">
            Meet the qualified professionals who make LA CROWN a trusted name in luxury aesthetic medicine and salon excellence.
          </p>
        </div>
      </section>

      <div className="bg-amber-50 border-b border-amber-200 py-3">
        <div className="container-luxury flex items-start gap-3">
          <AlertCircle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="font-sans text-amber-800 text-sm">
            <strong>Administrator note:</strong> Team credentials and profiles are published based on the existing website and provided materials. All credentials should be independently verified before final publication. Profiles marked with a verification notice await confirmation.
          </p>
        </div>
      </div>

      {/* Founder */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <h2 className="font-serif text-charcoal text-3xl mb-2">Founder</h2>
          <div className="gold-divider-left mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {founder.map((m) => <TeamCard key={m.id} member={m} />)}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="section-padding bg-ivory-100">
        <div className="container-luxury">
          <h2 className="font-serif text-charcoal text-3xl mb-2">Medical Team</h2>
          <div className="gold-divider-left mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((m) => <TeamCard key={m.id} member={m} />)}
          </div>
        </div>
      </section>

      {/* International Faculty */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <h2 className="font-serif text-charcoal text-3xl mb-2">International Faculty</h2>
          <div className="gold-divider-left mb-3" />
          <p className="font-sans text-taupe text-sm mb-8">Current affiliation and faculty roles pending administrator confirmation.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((m) => <TeamCard key={m.id} member={m} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-burgundy text-white">
        <div className="container-luxury text-center">
          <h2 className="section-title-light mb-4">Consult with Our Experts</h2>
          <p className="font-sans text-white/80 mb-8 max-w-lg mx-auto">
            Book a consultation with our team to discuss your aesthetic or salon goals and receive personalised guidance.
          </p>
          <Link to="/appointment" className="btn-gold text-sm">Book a Consultation</Link>
        </div>
      </section>
    </div>
  );
}
