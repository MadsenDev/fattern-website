import { CheckCircle2, Download, Filter, Globe, Lock, Search, Shield, Sparkles, Tag, UploadCloud } from 'lucide-react'

const templateFilters = ['Alle', 'Gratis', 'Premium', 'Norsk', 'Engelsk', 'Lys', 'Mørk', 'Minimal', 'Klassisk']

const templates = [
  {
    id: 'nordic-clean',
    name: 'Nordic Clean',
    author: 'Fattern',
    tags: ['Minimal', 'Norsk', 'Bokmål'],
    version: '1.0.0',
    price: 'Gratis',
    premium: false,
    description: 'Lys, ren mal med tydelig typografi og norsk feltoppsett.',
    accent: 'bg-foam',
  },
  {
    id: 'modern-pro',
    name: 'Modern Pro',
    author: 'Fattern',
    tags: ['Premium', 'Engelsk', 'SaaS'],
    version: '1.1.0',
    price: 'Supporter',
    premium: true,
    description: 'Mørk aksent, tabeller med statusmerker og sterke CTA-farger.',
    accent: 'bg-brand-900 text-white',
  },
  {
    id: 'classic-elite',
    name: 'Classic Elite',
    author: 'Fattern',
    tags: ['Premium', 'Norsk', 'Klassisk'],
    version: '1.0.2',
    price: 'Supporter',
    premium: true,
    description: 'Elegant serif-hode, solide rammer og fin linje for betalingsinfo.',
    accent: 'bg-sand',
  },
  {
    id: 'freelance-studio',
    name: 'Freelance Studio',
    author: 'Studio Fjell',
    tags: ['Gratis', 'Engelsk', 'Lys'],
    version: '1.0.0',
    price: 'Gratis',
    premium: false,
    description: 'Fargerik toppstripe, logo-plassering og felt for prosjektnavn.',
    accent: 'bg-cloud',
  },
]

const faqs = [
  {
    question: 'Hvordan installerer jeg en mal?',
    answer: 'Importer .fattern-template i appen. Vi validerer metadata, bilder og schema før den legges til.',
  },
  {
    question: 'Hva betyr Supporter-låst?',
    answer: 'Premium maler krever Supporter-pakken. Gratis-maler fungerer for alle.',
  },
  {
    question: 'Hvilke data følger med en pakke?',
    answer: 'Metadata (navn, versjon, forfatter, lisens), schemaVersion, forhåndsvisning og assets/ bilder.',
  },
  {
    question: 'Kan jeg publisere egne maler?',
    answer: 'Ja, eksportér fra appen som .fattern-template. Markedsplassen vil støtte opplasting senere.',
  },
]

function MarketplacePage() {
  return (
    <div className="bg-white text-ink">
      <main>
        <section className="bg-brand-950 text-white" id="topp">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                Nyhet · Malmarked
              </div>
              <h1 className="font-display text-4xl md:text-5xl leading-tight">Template Marketplace</h1>
              <p className="text-white/80 leading-relaxed">
                Bla gjennom kuraterte fakturamaler, forhåndsvis som kort med live-preview, og installer via .fattern-template-pakker. Bygget for norsk fakturering og supporter-låsing.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-moss text-brand-950 px-6 py-3 text-sm font-semibold shadow-card hover:bg-foam transition">
                  Åpne i appen
                </button>
                <a
                  href="#utvalg"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Se malutvalg
                </a>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-white/10 border border-white/15 p-3">
                  <p className="text-white/70 text-xs uppercase tracking-wide">Pakkestandard</p>
                  <p className="font-semibold">.fattern-template · schemaVersion 1</p>
                </div>
                <div className="rounded-2xl bg-white/10 border border-white/15 p-3">
                  <p className="text-white/70 text-xs uppercase tracking-wide">Kompatibilitet</p>
                  <p className="font-semibold">Fattern 1.0.0+</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-brand-900 blur-3xl opacity-60" aria-hidden />
              <div className="relative rounded-3xl bg-white text-ink shadow-card border border-sand/60 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.08em] text-ink-subtle">Katalog</p>
                    <p className="text-xl font-semibold text-ink">Maler med forhåndsvisning</p>
                  </div>
                  <div className="rounded-full bg-cloud text-accent text-xs font-semibold px-3 py-1">Live-kort</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-sand/60 bg-cloud p-3 space-y-2">
                    <p className="text-ink-subtle text-xs">Filtrering</p>
                    <p className="font-semibold text-ink">Gratis · Premium · Kjøpt</p>
                  </div>
                  <div className="rounded-2xl border border-sand/60 bg-cloud p-3 space-y-2">
                    <p className="text-ink-subtle text-xs">Metadata</p>
                    <p className="font-semibold text-ink">Forfatter, lisens, tags</p>
                  </div>
                  <div className="rounded-2xl border border-sand/60 bg-cloud p-3 space-y-2">
                    <p className="text-ink-subtle text-xs">Pakkestøtte</p>
                    <p className="font-semibold text-ink">Import/eksport .fattern-template</p>
                  </div>
                  <div className="rounded-2xl border border-sand/60 bg-cloud p-3 space-y-2">
                    <p className="text-ink-subtle text-xs">Gating</p>
                    <p className="font-semibold text-ink">Premium-lås på kort</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="kategorier" className="max-w-6xl mx-auto px-4 md:px-8 py-14 space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-accent">Filtre</p>
            <h2 className="font-display text-3xl text-ink">Finn riktige maler raskt</h2>
            <p className="text-ink-soft max-w-3xl">
              Filtrer på gratis, premium, språk, lys/mørk og stil. Vi viser tydelig hvilke maler som er låst for supportere, og hvilke du allerede eier.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="inline-flex items-center gap-2 rounded-full bg-cloud px-3 py-1.5 text-xs font-semibold text-ink">
              <Filter className="h-4 w-4" />
              Filtrer
            </button>
            {templateFilters.map((filter) => (
              <button
                key={filter}
                className="rounded-full border border-sand/80 px-3 py-1.5 text-xs font-semibold text-ink-subtle hover:bg-cloud transition"
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="rounded-3xl border border-sand/60 bg-white shadow-card p-4 flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-cloud border border-sand/60 text-sm text-ink">
              <Search className="h-4 w-4 text-accent" />
              <span>Søk på navn, språk eller forfatter</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-cloud border border-sand/60 text-sm text-ink">
              <Tag className="h-4 w-4 text-accent" />
              <span>Tags og kategorier</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-cloud border border-sand/60 text-sm text-ink">
              <Shield className="h-4 w-4 text-accent" />
              <span>Validering før installasjon</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-cloud border border-sand/60 text-sm text-ink">
              <UploadCloud className="h-4 w-4 text-accent" />
              <span>Importer .fattern-template</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-cloud border border-sand/60 text-sm text-ink">
              <Download className="h-4 w-4 text-accent" />
              <span>Eksporter egne maler</span>
            </div>
          </div>
        </section>

        <section id="utvalg" className="max-w-6xl mx-auto px-4 md:px-8 pb-14 space-y-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-accent">Utvalg</p>
              <h2 className="font-display text-3xl text-ink">Kuraterte maler med forhåndsvisning</h2>
              <p className="text-ink-soft mt-1">
                Kort med live-iframe, metadata, badges og handlinger. Premium-låste maler er tydelig merket.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <button className="rounded-full border border-sand px-4 py-2 text-sm font-semibold text-ink hover:bg-cloud transition">
                Sorter: Nyeste
              </button>
              <button className="rounded-full bg-accent text-white px-4 py-2 text-sm font-semibold shadow-card hover:bg-brand-700 transition">
                Importer pakke
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {templates.map((template) => (
              <div key={template.id} className="rounded-3xl border border-sand/60 bg-white shadow-card overflow-hidden flex flex-col">
                <div className={`h-40 ${template.accent} relative`}>
                  <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink">
                    <Sparkles className="h-4 w-4 text-accent" />
                    Forhåndsvisning
                  </div>
                  {template.premium && (
                    <div className="absolute top-3 right-3 inline-flex items-center gap-2 rounded-full bg-amber-500 text-white px-3 py-1 text-xs font-semibold shadow-card">
                      <Lock className="h-4 w-4" />
                      Supporter
                    </div>
                  )}
                  {!template.premium && (
                    <div className="absolute top-3 right-3 inline-flex items-center gap-2 rounded-full bg-brand-900 text-white px-3 py-1 text-xs font-semibold shadow-card">
                      Gratis
                    </div>
                  )}
                </div>
                <div className="p-4 space-y-3 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-ink">{template.name}</h3>
                      <p className="text-sm text-ink-subtle">av {template.author}</p>
                    </div>
                    <div className="text-right text-xs text-ink-subtle">
                      <p>v{template.version}</p>
                      <p>{template.price}</p>
                    </div>
                  </div>
                  <p className="text-sm text-ink-soft leading-relaxed">{template.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {template.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-cloud px-2 py-1 text-[11px] font-semibold text-ink-subtle">
                        <Tag className="h-3 w-3 text-accent" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-4 pb-4 flex gap-2">
                  <button className="flex-1 rounded-full bg-accent text-white px-4 py-2 text-sm font-semibold shadow-card hover:bg-brand-700 transition">
                    Se detaljer
                  </button>
                  <button className="flex-1 rounded-full border border-sand px-4 py-2 text-sm font-semibold text-ink hover:bg-cloud transition">
                    Importer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="prosess" className="bg-mist">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Validering',
                text: 'Vi sjekker schemaVersion, metadata, assets og min-app-versjon før installasjon.',
                icon: <Shield className="h-5 w-5 text-accent" />,
              },
              {
                title: 'Import/eksport',
                text: 'Pakkestruktur: template.json + assets/ + preview.png. Importer og eksporter fra appen.',
                icon: <UploadCloud className="h-5 w-5 text-accent" />,
              },
              {
                title: 'Gating',
                text: 'Premium maler er låst bak supporter-pakken. Gratis maler er åpne for alle.',
                icon: <Lock className="h-5 w-5 text-accent" />,
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl bg-white border border-sand/60 shadow-card p-5 space-y-2">
                <div className="h-10 w-10 rounded-2xl bg-cloud grid place-items-center">{item.icon}</div>
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq-marketplace" className="max-w-6xl mx-auto px-4 md:px-8 py-14 space-y-8">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-accent">FAQ</p>
            <h2 className="font-display text-3xl text-ink">Vanlige spørsmål om malmarkedet</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-3xl shadow-card border border-sand/60 p-5 space-y-2">
                <h3 className="text-lg font-semibold text-ink">{faq.question}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-brand-950 text-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-3">
              <p className="text-sm font-semibold text-moss">Klar når du er</p>
              <h3 className="font-display text-3xl">Bygget for neste steg: opplasting, kjøp og synk</h3>
              <p className="text-white/80 leading-relaxed">
                Markedet er designet for fremtidig publisering: metadata, lisens, forfatter, tags og assets følger pakken. Når backenden er klar kan vi koble på opplasting, kjøp og synk.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-white text-brand-900 px-5 py-2.5 text-sm font-semibold shadow-card hover:bg-cloud transition">
                  Se planlagt roadmap
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition">
                  Kontakt oss
                </button>
              </div>
            </div>
            <div className="rounded-3xl bg-white text-ink shadow-card border border-sand/60 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-ink">Status</p>
                <Globe className="h-5 w-5 text-accent" />
              </div>
              <div className="space-y-2 text-sm text-ink-soft">
                <p><CheckCircle2 className="inline h-4 w-4 mr-2 text-accent" />Kort med forhåndsvisning</p>
                <p><CheckCircle2 className="inline h-4 w-4 mr-2 text-accent" />Filtrering + badges</p>
                <p><CheckCircle2 className="inline h-4 w-4 mr-2 text-accent" />Pakke-import/eksport designet</p>
                <p><CheckCircle2 className="inline h-4 w-4 mr-2 text-accent" />Supporter-gating UI</p>
                <p className="text-ink text-sm font-semibold">Neste: opplasting, kjøp, synk.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default MarketplacePage

