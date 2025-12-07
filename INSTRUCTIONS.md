## 1. Tech + Design Foundations

**Stack (recommended):**

* React (Vite or Next.js) + **Tailwind CSS**
* Use the existing Tailwind config from the app:

  * `fontFamily.sans = Inter`
  * `fontFamily.display = "Soehne", Inter`
  * Colors (from `extend.colors`):

    * `brand` (scale):

      * core brand colors come from:

        * `brandCore.deep = #0d3e51`
        * `brandCore.base = #2f8981`
        * `brandCore.lift = #67b999`
      * `brand[950] = #041318`
      * `brand[900] = brandCore.deep`
      * `brand[800] = #144d5b`
      * `brand[700] = #1b5c64`
      * `brand[600] = brandCore.base`
      * `brand[500] = #59a19a`
      * `brand[400] = #82b8b3`
      * `brand[300] = #a4d5c2`
      * `brand[200] = #c2e3d6`
      * `brand[100] = #e1f1eb`
      * `brand[50]  = #f0f8f5`
    * `ink = #0d3e51` (primary text)
    * `ink-soft = #3d6574` (secondary text)
    * `ink-subtle = #6e8b97` (muted)
    * `accent = #2f8981` (buttons, links)
    * `moss = #67b999` (secondary accent)
    * `cloud = brand[50]`
    * `mist = #e1f1eb`
    * `sand = #d5e7e6`
    * `foam = #a4d5c2`
    * `tide = #82b8b3`
  * `boxShadow.card = '0 10px 30px rgba(13, 62, 81, 0.12)'`

**Design feel:**

* Figma/Notion-like friendliness:

  * Lots of white + light brand backgrounds (`brand[50]`, `sand`, `cloud`)
  * Rounded cards, `shadow-card`
  * Display font for big headings, sans for body
* Tone = **calm, confident, indie-crafted**, not corporate/SaaS.

**Language:**

* Primary site language: **Norwegian (Bokmål)**.
* Structure copy so it can easily be internationalized later, but Codex can start with Norwegian only.

---

## 2. Overall Page Structure

Single-page marketing site (can be split into routes later). Sections:

1. **Nav / Header**
2. **Hero**
3. **Problem / Why Fattern**
4. **Features overview**
5. **Local-first & Privacy section**
6. **Template Editor section**
7. **Import & Migration section (SAF-T + CSV + legacy like Mamut)**
8. **AI Features & Supporter Pack**
9. **Screenshots / UI preview**
10. **FAQ**
11. **Footer**

### 2.1 Top Navigation

Sticky top nav with brand:

* Left: Fattern logo (use the monogram + wordmark)
* Right nav items (desktop):

  * `Funksjoner`
  * `Malredigering`
  * `Import & migrering`
  * `Supporter-pakken`
  * `FAQ`
  * Primary CTA button: `Last ned` (or `Bli varslet` if not ready)

Mobile: hamburger → slide-in menu.

Style:

* Background: `bg-white/80` with `backdrop-blur` over brand gradient or solid.
* Text: `text-ink`, links hover `text-accent`.

---

## 3. Hero Section

**Goal:** Immediately communicate what Fattern is and why it’s different.

Content (Norwegian):

* Tagline (H1, font-display, large):

  > **Fattern – lokal-først fakturering for frilansere og små bedrifter**

* Subheading:

  > En moderne faktura- og utgiftsapp som kjører helt lokalt på din maskin.
  > Ingen innlogging. Ingen abonnement. Full kontroll.

* CTA buttons:

  * Primary: `Last ned Fattern` (when ready)
  * Secondary: `Se hvordan det fungerer`

* Supporting line:

  > Bygget for norske frilansere som er lei av gamle PC-er og dyre sky-tjenester.

Layout:

* Left column: text + CTAs
* Right column: framed screenshot mockup of the app / dashboard (placeholder component now).

Background:

* Soft gradient using brand colors, e.g.

  * `bg-[radial-gradient(circle_at_top,_rgba(104,185,153,0.25),_transparent),theme('colors.brand.950')]`
* Hero card in front: `bg-white`, `rounded-3xl`, `shadow-card`.

---

## 4. “Why Fattern?” Section

Explain **problem → solution** clearly.

Key bullets (in Norwegian):

* Problem:

  * “Gamle PC-er holdes i live kun fordi Mamut fortsatt kjører.”
  * “Skybaserte regnskapssystemer krever abonnement og innlogging.”
  * “Enkle faktura-apper føles billige, stygge eller begrensede.”

* Fattern’s answer:

  * Egentlig desktop-app, ingen nettleser.
  * Lokal SQLite-database – alt ligger på maskinen din.
  * Moderne, rolig UI bygget for norsk hverdag (fakturamal, org.nr, KID, etc.).
  * Gratis kjerne – ingen månedlig kostnad.

Design:

* 2–3 columns of cards with icons (use `react-icons` for generic icons).
* Card style: `bg-white`, `shadow-card`, `rounded-2xl`, `p-6`, `border border-sand`.

---

## 5. Features Overview Section

Grid or vertical feature blocks, each with a small illustration or icon.

Suggested feature categories:

1. **Fakturering**

   * Opprett og send fakturaer raskt
   * Kunder, produkter, linjeelementer
   * Status: utkast, sendt, betalt, forfalt
   * PDF-eksport med pene maler

2. **Utgifter**

   * Registrer utgifter, kategoriser dem
   * Last opp kvitteringer (bilder/PDF)
   * Koble mot budsjettår og rapporter

3. **Kunder & produkter**

   * Kunderegister med org.nr, adresser m.m.
   * Produktkatalog med priser, mva-satser, enheter

4. **Budsjettår**

   * Definer egne budsjettår (f.eks. 01.07–30.06)
   * Se inntekt/utgift per år

Layout:

* Use responsive grid on desktop (`grid-cols-2` or `grid-cols-3`) and stack on mobile.
* Use `accent` and `moss` sparingly for icons or accents.

---

## 6. Local-first & Privacy Section

Dedicated section emphasizing:

* Alt lagres lokalt i en SQLite-fil.
* Ingen innlogging.
* Ingen sky, ingen tredjeparts backend.
* Du kan ta sikkerhetskopier selv (mappe på disken).

Visual:

* Side-by-side:

  * Left: text
  * Right: small diagram showing:

    * “Fattern app” → “fattern.db” on disk
* Background: `bg-cloud` or `bg-mist`, card with white foreground.

---

## 7. Template Editor Section

Highlight this as a **signature feature**.

Explain:

* Fullskjerms malredigerer i appen.
* Dra-og-slipp-elementer (tekst, felter, tabeller, logo).
* Ekte 1:1 forhåndsvisning mot eksportert PDF.
* Mulighet for å ha flere fakturamaler.
* Tilpass til din visuelle profil.

Layout:

* Big screenshot mockup of the template editor on right.
* Feature bullets on left:

  * “Visuell side-editor for fakturaer”
  * “Absolutt posisjonering, justering, grid”
  * “Støtte for norske felt (org.nr, KID, kontonummer)”

Use `bg-brand-950` with white text for this section to make it pop, with cards that use `bg-brand-900` and `shadow-card`.

---

## 8. Import & Migration Section (including Mamut)

Communicate:

* Fattern kan importere data fra andre systemer via:

  * **SAF-T** (standardisert)
  * **CSV** med veiviser for feltmapping

* Eksempler:

  * Fiken, Tripletex, Visma eAccounting, Conta
  * Mamut (CSV/SAF-T, med rom for mer avansert støtte senere)

Structure:

* Title: “Ta med deg historikken din”
* Two columns:

  * Left: SAF-T

    * “Støtter SAF-T – det offisielle regnskapsformatet.”
    * “Importer kunder, fakturaer, produkter, utgifter.”
  * Right: CSV

    * “Egen veiviser for CSV-import.”
    * “Map kolonner til felter, lagre som forhåndsoppsett.”
* Small callout for legacy systems:

  > Bruker du fortsatt en gammel Mamut-installasjon på en gammel PC?
  > Fattern er bygget nettopp for å gi deg en moderne, lokal etterfølger.

Design:

* Use cards on `bg-cloud` with labeled icons.

---

## 9. AI & Supporter Pack Section

This is where monetization + AI live.

Content:

* Headline: “Gratis kjerne. Smarte funksjoner for supportere.”
* Explain:

  * Selve appen er gratis og fullverdig.
  * Du kan støtte utviklingen ved å kjøpe en **Supporter-pakke**.
* Supporter Pack includes (planned):

  * AI-drevet kvitteringstolkning (OCR + feltutfylling).
  * Smart CSV-mapping med automatiske forslag.
  * Ekstra maler og tema.
  * Tidlig tilgang til nye funksjoner.

Important tone:

* “Ingen abonnement. Ingen låste grunnfunksjoner.”
* “Supporter-pakken er for deg som vil spare tid og støtte videre utvikling.”

Layout:

* Two-column block:

  * Left: Free core features list.
  * Right: Supporter Pack extras list.

Use a different background (e.g. `bg-brand-950`) with `text-white`, highlight `Supporter-pakken` badge in `bg-moss`.

---

## 10. Screenshots / UI Preview Section

Grid-style or carousel section:

* Show:

  * Dashboard
  * Invoice editor
  * Expense list
  * Template editor

For now Codex can use placeholder images / cards.

---

## 11. FAQ

Examples of questions:

* “Er Fattern virkelig helt lokal?”
* “Koster det noe å bruke Fattern?”
* “Hvordan importerer jeg data fra Fiken / Mamut / Tripletex?”
* “Hva skjer hvis PC-en min krasjer?”
* “Kommer det mobilapp?”
* “Hva med synkronisering og sky?”

Answers should reinforce:

* Local-first
* Free core
* Optional Supporter Pack
* SAF-T + CSV import
* Plan for fremtidig Android companion + GESH sync (uten å love dato).

---

## 12. Footer

Include:

* Short tagline:

  > Fattern – enklere fakturering. Mer privatliv. Full kontroll.
* Links:

  * GitHub repo (if public)
  * Dokumentasjon
  * Personvern / vilkår (placeholder)
  * Kontakt / e-post
* Small “Built by [Your Name]” credit.

Background: `bg-brand-950`, `text-ink-subtle` / `text-white/80`.

---

## 13. Tailwind / Component Guidelines for Codex

* Use **existing Tailwind config** from `/mnt/data/tailwind.config.cjs`.
* Use:

  * `font-display` for headings (`className="font-display text-4xl md:text-5xl"`).
  * `font-sans` for body text.
* Colors:

  * Main background sections:

    * `bg-white`
    * `bg-cloud` / `bg-mist` for soft sections
    * `bg-brand-950` for “highlight” sections (template editor, supporter)
  * CTAs:

    * `bg-accent text-white hover:bg-brand-700`
  * Secondary buttons:

    * `bg-white text-accent border border-sand hover:bg-sand/40`
* Cards:

  * `bg-white rounded-3xl shadow-card border border-sand/60`
* Use `max-w-5xl`/`max-w-6xl` and `mx-auto px-4 md:px-8` for width/layout.
