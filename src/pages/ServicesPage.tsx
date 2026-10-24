import Breadcrumb from '../components/Breadcrumb';
import ServiceDirectory from '../components/ServiceDirectory';

export default function ServicesPage() {
  return (
    <div>
      <section className="relative py-24 bg-burgundy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-luxury relative z-10">
          <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: 'Service Directory' }]} light />
          <div className="section-eyebrow mt-4 mb-3">Catalogue & Treatment Finder</div>
          <h1 className="font-serif text-white text-5xl md:text-6xl leading-tight mb-5">
            Service Directory
          </h1>
          <div className="w-16 h-0.5 bg-gold mb-5" />
          <p className="font-sans text-white/80 text-lg max-w-xl">
            Explore our complete treatment and salon catalogue. Filter between clinical aesthetic procedures and salon grooming services.
          </p>
        </div>
      </section>

      <section className="section-padding bg-ivory-100">
        <div className="container-luxury">
          <ServiceDirectory />
        </div>
      </section>
    </div>
  );
}
