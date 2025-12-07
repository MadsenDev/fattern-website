import { ArrowDownCircle, CheckCircle2, Shield, Sparkles, UploadCloud, Zap } from 'lucide-react'
import './index.css'

const navLinks = [
  { label: 'Funksjoner', href: '#funksjoner' },
  { label: 'Malredigering', href: '#malredigering' },
  { label: 'Import & migrering', href: '#import' },
  { label: 'Supporter-pakken', href: '#supporter' },
  { label: 'FAQ', href: '#faq' },
]

const features = [
  {
    title: 'Faktura & tilbud',
    description: 'Lag fakturaer, kreditnotaer og tilbud på sekunder – helt uten nett.',
  },
  {
    title: 'Utgiftskontroll',
    description: 'Registrer kvitteringer, kategoriser kostnader og hold kontroll på MVA.',
  },
  {
    title: 'SAF-T støtte',
    description: 'Bygget for norsk regnskap med SAF-T-import og planlagt eksport for revisjon.',
  },
]

const privacyPoints = [
  'Ingen innlogging eller kontoer. All data lagres lokalt på maskinen din.',
  'Krypterte sikkerhetskopier for trygg lagring hjemme eller på egen server.',
  'Fungerer offline – perfekt for gamle PC-er eller arbeidsstasjoner uten skytilgang.',
]

const templateHighlights = [
  'Tilpass logo, farger og felt med et par klikk.',
  'Flere språkklare maler: norsk, engelsk og svenske varianter.',
  'Forhåndsvis i mørk og lys modus før du eksporterer til PDF.',
]

const importOptions = [
  'SAF-T filer fra Fiken, Tripletex eller regnskapsfører.',
  'CSV fra banken, kortterminalen eller din egen eksport.',
  'Gamle Mamut-data – ta med kunder, produkter og historikk via SAF-T eller CSV.',
]

const supporterExtras = [
  'AI-drevet kvitteringstolkning med automatisk feltutfylling.',
  'Smart CSV-mapping som foreslår riktige konti og mva-koder.',
  'Eksklusive maler, temaer og tidlig tilgang til nye funksjoner.',
]

const faqs = [
  {
    question: 'Er Fattern virkelig helt lokal?',
    answer:
      'Ja. Appen kjører som et skrivebordsprogram uten skyavhengighet. Du eier filene og kan ta backup hvordan du vil.',
  },
  {
    question: 'Koster det noe å bruke Fattern?',
    answer:
      'Kjernen er gratis. Du kan kjøpe Supporter-pakken for ekstra AI-funksjoner og for å støtte videre utvikling.',
  },
  {
    question: 'Hvordan importerer jeg data fra Fiken / Mamut / Tripletex?',
    answer:
      'Importer SAF-T eller CSV direkte. For Mamut hjelper vi deg med å rydde og mappe data via eksportene du allerede har.',
  },
  {
    question: 'Hva skjer hvis PC-en min krasjer?',
    answer:
      'Ta jevnlige lokale sikkerhetskopier. Du kan også lagre krypterte kopier på valgfri sky som du kontrollerer selv.',
  },
  {
    question: 'Kommer det mobilapp?',
    answer:
      'Planen er en Android-kompanjong for skanning av kvitteringer og synkronisering via GESH uten å ofre lokal-kontroll.',
  },
]

const screenshotPlaceholders = [
  {
    title: 'Dashboard',
    description: 'Prosjektoversikt med kontantstrøm og forfallsvarsler.',
  },
  {
    title: 'Fakturaredigering',
    description: 'Rediger fakturalinjer, referanser og MVA-satser med forhåndsvisning.',
  },
  {
    title: 'Utgiftsliste',
    description: 'Filtrer kvitteringer, legg til bilag og marker betalinger.',
  },
  {
    title: 'Malbygger',
    description: 'Juster farger, logo og feltoppsett før eksport til PDF.',
  },
]

function Logo() {
  return (
    <div className="flex items-center gap-2 text-ink">
      <div className="h-10 w-10 rounded-2xl bg-brand-900 text-white grid place-items-center font-semibold shadow-card">
        F
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-display text-xl">Fattern</span>
        <span className="text-sm text-ink-subtle">Lokal fakturering</span>
      </div>
    </div>
  )
}

function App() {
  const year = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-white text-ink">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur shadow-sm border-b border-sand/60">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-soft">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-accent transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#preview"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-sand bg-white px-4 py-2 text-sm font-semibold text-accent hover:bg-sand/40 transition"
            >
              <ArrowDownCircle className="h-4 w-4" /> Se hvordan
            </a>
            <button className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-700 transition">
              Last ned
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-cloud">
          <div className="max-w-6xl mx-auto px-4 md:px-8 pt-14 pb-12 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-accent border border-sand shadow-card">
                Lokal-først · Norskbygd
              </div>
              <div className="space-y-4">
                <h1 className="font-display text-4xl md:text-5xl text-ink">
                  Fattern – lokal-først fakturering for frilansere og små bedrifter
                </h1>
                <p className="text-lg text-ink-soft leading-relaxed">
                  En moderne faktura- og utgiftsapp som kjører helt lokalt på din maskin. Ingen innlogging. Ingen abonnement. Full kontroll.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-card hover:bg-brand-700 transition">
                  Last ned Fattern
                </button>
                <a
                  href="#preview"
                  className="inline-flex items-center gap-2 rounded-full border border-sand bg-white px-6 py-3 text-sm font-semibold text-accent hover:bg-sand/40 transition"
                >
                  Se hvordan det fungerer
                </a>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-card border border-sand/60">
                <p className="text-sm text-ink-soft">
                  Bygget for norske frilansere som er lei av gamle PC-er og dyre sky-tjenester.
                </p>
                <div className="mt-3 grid gap-2 text-sm text-ink-subtle">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Ingen konto. Ingen låste funksjoner.
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Klar for SAF-T-import, CSV og Mamut-overføringer.
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Designet for å leve offline – også på eldre maskinvare.
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 gradient-strip blur-3xl opacity-70" aria-hidden />
              <div className="relative rounded-3xl bg-white shadow-card border border-sand/60 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.08em] text-ink-subtle">Oversikt</p>
                    <p className="text-2xl font-display text-ink">Fattern 1.0</p>
                  </div>
                  <div className="rounded-full bg-moss/20 text-moss text-xs font-semibold px-3 py-1">Lokal</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {["Fakturaer", "Utgifter", "Klare eksport", "Kunder"].map((item, idx) => (
                    <div key={item} className="rounded-2xl bg-cloud px-4 py-3 border border-sand/60">
                      <p className="text-xs text-ink-subtle">{item}</p>
                      <p className="text-xl font-semibold text-ink">{[18, 42, 6, 58][idx]}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl bg-brand-950 text-white p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="h-10 w-10 rounded-2xl bg-white/10 p-2" />
                    <div>
                      <p className="text-sm text-white/70">Problem: gamle PC-er og skyavhengighet</p>
                      <p className="text-lg font-semibold">Fattern er lokal og lett</p>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Unngå trege nettportaler og dyre lisenser. Fattern kjører som et vanlig program, med moderne UI og full kontroll på dataene dine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="funksjoner" className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-accent/15 grid place-items-center text-accent">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-accent">Hvorfor Fattern</p>
              <h2 className="font-display text-3xl text-ink">Laget for norske frilansere og små team</h2>
            </div>
          </div>
          <p className="text-ink-soft max-w-3xl">
            Slutt på tunge nettportaler. Fattern gir deg et rolig, raskt og lokalt arbeidsmiljø – med alle verktøyene du trenger for å sende fakturaer, følge opp kostnader og eksportere til revisjon.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-3xl shadow-card border border-sand/60 p-6 space-y-3"
              >
                <div className="h-12 w-12 rounded-2xl bg-cloud grid place-items-center text-accent">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-ink">{feature.title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-mist" id="lokal">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-accent">Lokal-først & personvern</p>
              <h2 className="font-display text-3xl text-ink">Full kontroll på dataene dine</h2>
              <p className="text-ink-soft leading-relaxed">
                Fattern er bygget for å fungere uten sky. Du kan jobbe offline, ta sikkerhetskopier selv og dele kun det du ønsker. Ingen kontoer, ingen skjulte abonnement.
              </p>
              <ul className="space-y-3 text-ink-soft">
                {privacyPoints.map((point) => (
                  <li key={point} className="flex gap-3 items-start">
                    <Shield className="h-5 w-5 mt-0.5 text-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl border border-sand/60 shadow-card p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-ink-subtle">Backup & eksport</p>
                  <p className="text-xl font-semibold text-ink">Alt ligger hos deg</p>
                </div>
                <div className="rounded-full bg-brand-900 text-white text-xs px-3 py-1">Offline</div>
              </div>
              <div className="rounded-2xl bg-cloud p-4 border border-sand/60 space-y-2">
                <div className="flex items-center justify-between text-sm text-ink-soft">
                  <span>SAF-T støtte</span>
                  <span className="font-semibold text-ink">Import nå · eksport planlagt</span>
                </div>
                <div className="flex items-center justify-between text-sm text-ink-soft">
                  <span>Kryptert backup</span>
                  <span className="font-semibold text-ink">Aktivert</span>
                </div>
                <div className="flex items-center justify-between text-sm text-ink-soft">
                  <span>Lokal database</span>
                  <span className="font-semibold text-ink">På maskinen din</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-ink-soft">
                <Shield className="h-10 w-10 rounded-2xl bg-accent/10 text-accent p-2" />
                <span>Ingen tredjepart får tilgang. Du velger selv hvordan du deler filer med revisor eller regnskapsfører.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="malredigering" className="bg-brand-950 text-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-moss">Malredigering</p>
              <h2 className="font-display text-3xl">Bygg egne fakturamaler på minutter</h2>
              <p className="text-white/80 leading-relaxed">
                Dra-og-slipp redigering, brandfarger og logoer på plass. Fattern lar deg lagre flere maler slik at du kan bytte mellom kunder eller språk uten stress.
              </p>
              <ul className="space-y-3 text-white/80">
                {templateHighlights.map((point) => (
                  <li key={point} className="flex gap-3 items-start">
                    <Sparkles className="h-5 w-5 mt-0.5 text-moss" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-moss px-5 py-2.5 text-sm font-semibold text-brand-950 shadow-card hover:bg-foam transition">
                  Test malbyggeren
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-foam/70 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition">
                  Se eksempelmal
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-8 bg-brand-900 blur-3xl opacity-60" aria-hidden />
              <div className="relative bg-white text-ink rounded-3xl p-6 shadow-card border border-sand/60 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.08em] text-ink-subtle">Mal-forhåndsvisning</p>
                    <p className="text-xl font-semibold text-ink">Nordic Clean</p>
                  </div>
                  <div className="rounded-full bg-cloud text-accent text-xs font-semibold px-3 py-1">PDF</div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl border border-sand/60 p-3 bg-cloud">
                    <p className="text-ink-subtle text-xs">Hovedfarge</p>
                    <p className="font-semibold text-ink">Brand 600</p>
                  </div>
                  <div className="rounded-xl border border-sand/60 p-3 bg-cloud">
                    <p className="text-ink-subtle text-xs">Logo</p>
                    <p className="font-semibold text-ink">Importer .svg</p>
                  </div>
                  <div className="rounded-xl border border-sand/60 p-3 bg-cloud">
                    <p className="text-ink-subtle text-xs">Språk</p>
                    <p className="font-semibold text-ink">Norsk Bokmål</p>
                  </div>
                  <div className="rounded-xl border border-sand/60 p-3 bg-cloud">
                    <p className="text-ink-subtle text-xs">Felt</p>
                    <p className="font-semibold text-ink">+ Tekstlinje</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-cloud p-4 border border-sand/60 space-y-2 text-sm text-ink-soft">
                  <p className="font-semibold text-ink">Forhåndsvisning</p>
                  <p>Faktura til: Oslo Designstudio</p>
                  <p>Forfallsdato: 14 dager · MVA 25%</p>
                  <p>Totalt: 18 400 kr</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="import" className="max-w-6xl mx-auto px-4 md:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-white rounded-3xl border border-sand/60 shadow-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-accent">Import & migrering</p>
                <h3 className="font-display text-2xl text-ink">Enkel vei ut av gamle systemer</h3>
              </div>
              <UploadCloud className="h-10 w-10 text-accent" />
            </div>
            <p className="text-ink-soft leading-relaxed">
              Kom deg videre fra Mamut, Fiken eller Tripletex uten smerte. Fattern hjelper deg å mappe kolonner, rydde data og validere at alt er på plass før du går videre.
            </p>
            <div className="space-y-3">
              {importOptions.map((option) => (
                <div key={option} className="flex items-start gap-3 text-sm text-ink-soft">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-accent" />
                  <span>{option}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-cloud border border-sand/60 p-4 text-sm text-ink-soft flex items-center gap-3">
              <Zap className="h-8 w-8 text-accent" />
              <span>SAF-T validert lokalt før eksport. CSV-importen foreslår kontoplan og bilagsdato automatisk.</span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl bg-brand-950 text-white p-6 shadow-card space-y-3">
              <p className="text-sm font-semibold text-moss">For Mamut-brukere</p>
              <h3 className="font-display text-2xl">Endelig en modernisering</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Vi vet at mange fortsatt sitter på en gammel Mamut-installasjon. Fattern guider deg gjennom SAF-T eller CSV slik at kunder, produkter og historikk blir med videre.
              </p>
            </div>
            <div className="rounded-3xl bg-cloud border border-sand/60 p-6 space-y-3">
              <p className="text-sm font-semibold text-accent">Migreringssjekkliste</p>
              <ul className="space-y-2 text-sm text-ink-soft">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-accent" />
                  <span>Importer kunder og produkter med mva-koder.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-accent" />
                  <span>Koble bankkontoer for rask CSV-innlasting.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-accent" />
                  <span>Eksporter SAF-T for revisjon når du trenger det (planlagt).</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="supporter" className="bg-brand-950 text-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-moss">AI & Supporter-pakken</p>
              <h2 className="font-display text-3xl">Gratis kjerne. Smarte funksjoner for supportere.</h2>
              <p className="text-white/80 leading-relaxed">
                Selve appen er gratis og fullverdig. Supporter-pakken er for deg som vil spare tid og støtte videre utvikling – uten abonnement og uten låste basisfunksjoner.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-3xl bg-white/5 border border-white/10 p-4 space-y-2">
                  <p className="text-sm font-semibold text-white">Gratis kjerne</p>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="h-5 w-5 text-moss" />
                      <span>Ubegrenset fakturering og utgiftsføring.</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="h-5 w-5 text-moss" />
                      <span>Lokal lagring og SAF-T-støtte (eksport planlagt).</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="h-5 w-5 text-moss" />
                      <span>Malbygger og PDF-eksport.</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-3xl bg-moss text-brand-950 p-4 space-y-2 shadow-card">
                  <div className="inline-flex items-center gap-2 bg-white/60 text-brand-950 px-3 py-1 rounded-full text-xs font-semibold">
                    Supporter-pakken
                  </div>
                  <ul className="space-y-2 text-sm">
                    {supporterExtras.map((extra) => (
                      <li key={extra} className="flex gap-2 items-start">
                        <CheckCircle2 className="h-5 w-5 text-brand-950" />
                        <span>{extra}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-white text-brand-900 px-5 py-2.5 text-sm font-semibold shadow-card hover:bg-cloud transition">
                  Kjøp supporter-pakken
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition">
                  Les mer om AI-funksjonene
                </button>
              </div>
            </div>
            <div className="bg-white text-ink rounded-3xl p-6 shadow-card border border-sand/60 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-ink">Automatisert assistent</p>
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <div className="rounded-2xl bg-cloud border border-sand/60 p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-accent/10 text-accent grid place-items-center">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">Kvittering tolket</p>
                    <p className="text-ink-subtle text-xs">Bilagsnummer #2084</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm text-ink-soft">
                  <div className="rounded-xl border border-sand/60 p-3 bg-white">
                    <p className="text-ink-subtle text-xs">Beløp</p>
                    <p className="font-semibold text-ink">1 240 kr</p>
                  </div>
                  <div className="rounded-xl border border-sand/60 p-3 bg-white">
                    <p className="text-ink-subtle text-xs">Kategori</p>
                    <p className="font-semibold text-ink">Programvare</p>
                  </div>
                  <div className="rounded-xl border border-sand/60 p-3 bg-white">
                    <p className="text-ink-subtle text-xs">MVA</p>
                    <p className="font-semibold text-ink">25%</p>
                  </div>
                  <div className="rounded-xl border border-sand/60 p-3 bg-white">
                    <p className="text-ink-subtle text-xs">Status</p>
                    <p className="font-semibold text-ink">Klar til bokføring</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-ink-soft">
                AI-funksjonene er designet med personvern først – kvitteringer behandles trygt, og vi sender ikke mer data enn nødvendig.
              </p>
            </div>
          </div>
        </section>

        <section id="preview" className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-10">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-accent">Skjermbilder</p>
            <h2 className="font-display text-3xl text-ink">Et glimt av Fattern</h2>
            <p className="text-ink-soft max-w-3xl">
              Vi bygger et grensesnitt som føles som en god notatapp: raske snarveier, rolige farger og små detaljer som gjør fakturering mindre kjedelig.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {screenshotPlaceholders.map((shot) => (
              <div
                key={shot.title}
                className="rounded-3xl bg-white border border-sand/60 shadow-card p-4 space-y-3 flex flex-col"
              >
                <div className="h-28 rounded-2xl bg-cloud border border-sand/60" />
                <h3 className="font-semibold text-ink">{shot.title}</h3>
                <p className="text-sm text-ink-subtle">{shot.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="bg-cloud">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-accent">FAQ</p>
              <h2 className="font-display text-3xl text-ink">Ofte stilte spørsmål</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-3xl shadow-card border border-sand/60 p-5 space-y-2">
                  <h3 className="text-lg font-semibold text-ink">{faq.question}</h3>
                  <p className="text-ink-soft text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-950 text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 grid md:grid-cols-3 gap-8 items-center">
          <div className="space-y-2">
            <Logo />
            <p className="text-white/70 text-sm">
              Fattern – enklere fakturering. Mer privatliv. Full kontroll.
            </p>
          </div>
          <div className="text-sm text-white/80 space-y-2">
            <p className="font-semibold text-white">Lenker</p>
            <div className="flex flex-col gap-1">
              <a className="hover:text-moss" href="#funksjoner">Funksjoner</a>
              <a className="hover:text-moss" href="#supporter">Supporter-pakken</a>
              <a className="hover:text-moss" href="#faq">FAQ</a>
            </div>
          </div>
          <div className="text-sm text-white/80 space-y-2">
            <p className="font-semibold text-white">Kontakt</p>
            <p>kontakt@fattern.no</p>
            <p>Bygget av deg som er lei av sky-abonnement.</p>
            <p className="text-white/60 text-xs">© {year} Fattern</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
