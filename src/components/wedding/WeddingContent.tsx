import { Church, Clock, Gift, HeartHandshake, MapPin, Moon, Shirt, Sparkles } from "lucide-react";
import { Countdown } from "./Countdown";

const timeline = [
  { time: "14:40", title: "Atvykimas", text: "Prašome atvykti 15–20 min. anksčiau, kad galėtume ramiai pradėti ceremoniją." },
  { time: "15:00", title: "Santuokos ceremonija", text: "Šv. Kazimiero bažnyčia, Vilnius. Į bažnytinę dalį kviečiami ir vaikai." },
  { time: "18:00", title: "Vakarinė dalis", text: "Restoranas Elven, L. Stuokos-Gucevičiaus g. Vakarinė dalis — tik suaugusiems, N20." },
];

const dressColors = [
  { name: "Samanų žalia", className: "bg-moss-deep" },
  { name: "Sage", className: "bg-moss-soft" },
  { name: "Navy", className: "bg-navy" },
  { name: "Vario akcentai", className: "bg-copper" },
  { name: "Gilūs pilkšvi tonai", className: "bg-muted-foreground" },
];

export const WeddingContent = () => (
  <main className="relative z-20">
    <section className="container mx-auto grid min-h-[92vh] content-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div className="animate-reveal">
        <p className="font-script text-6xl text-copper sm:text-7xl">Kviečiame švęsti kartu</p>
        <h2 className="mt-3 max-w-3xl font-display text-6xl font-semibold leading-[0.88] text-moss-deep sm:text-7xl lg:text-8xl">
          Matas <span className="font-script text-copper">&amp;</span> Greta
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
          Rugsėjo 6 dieną norime būti apsupti žmonių, kurie mums brangūs. Lauksime Tavęs elegantiškoje, šiltoje ir labai mūsų šventėje.
        </p>
      </div>
      <div className="paper-grain relative overflow-hidden border border-copper/30 bg-vellum p-7 shadow-[0_30px_80px_hsl(var(--moss-deep)/0.18)]">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-copper/20" />
        <p className="font-display text-sm uppercase tracking-[0.32em] text-moss">2026 • 09 • 06</p>
        <div className="mt-8 space-y-6">
          <div className="flex gap-4">
            <Church className="mt-1 h-6 w-6 text-copper" />
            <div>
              <h3 className="font-display text-3xl text-moss-deep">Šv. Kazimiero bažnyčia</h3>
              <p className="text-muted-foreground">Ceremonija 15:00 • atvykti 14:40–14:45</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Moon className="mt-1 h-6 w-6 text-copper" />
            <div>
              <h3 className="font-display text-3xl text-moss-deep">Restoranas Elven</h3>
              <p className="text-muted-foreground">Vakarinė dalis 18:00 • L. Stuokos-Gucevičiaus g.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Countdown />

    <section id="schedule" className="container mx-auto px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-script text-6xl text-copper">Programa</p>
        <h2 className="font-display text-5xl font-semibold text-moss-deep sm:text-6xl">Dienos eiga</h2>
      </div>
      <div className="relative mx-auto mt-14 max-w-4xl">
        <div className="flow-line absolute left-6 top-0 h-full w-px sm:left-1/2" />
        {timeline.map((item, index) => (
          <div key={item.time} className={`relative mb-10 grid gap-6 sm:grid-cols-2 ${index % 2 ? "sm:text-left" : "sm:text-right"}`}>
            <div className={index % 2 ? "sm:col-start-2" : ""}>
              <div className="paper-grain relative overflow-hidden border border-copper/25 bg-vellum p-6 shadow-[0_18px_48px_hsl(var(--moss-deep)/0.12)] transition-transform hover:-translate-y-1">
                <span className="font-display text-5xl font-semibold text-copper">{item.time}</span>
                <h3 className="mt-2 font-display text-3xl text-moss-deep">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
              </div>
            </div>
            <span className="absolute left-4 top-8 h-5 w-5 rounded-full border-4 border-background bg-copper shadow-[0_0_0_8px_hsl(var(--copper)/0.16)] sm:left-1/2 sm:-translate-x-1/2" />
          </div>
        ))}
      </div>
    </section>

    <section id="details" className="bg-moss-deep py-20 text-primary-foreground">
      <div className="container mx-auto grid gap-5 px-6 md:grid-cols-2 lg:grid-cols-4">
        <article className="border border-pearl/15 bg-pearl/10 p-6 backdrop-blur">
          <Shirt className="h-7 w-7 text-copper-glow" />
          <h3 className="mt-5 font-display text-3xl">Aprangos kodas</h3>
          <p className="mt-3 text-pearl/75">Moterys — ilgos suknelės, vyrai — kostiumai ar švarkai. Venkite baltos, bordo ir labai šviesių tonų.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {dressColors.map((color) => (
              <span key={color.name} title={color.name} className={`h-8 w-8 rounded-full border border-pearl/35 ${color.className}`} />
            ))}
          </div>
        </article>
        <article className="border border-pearl/15 bg-pearl/10 p-6 backdrop-blur">
          <Gift className="h-7 w-7 text-copper-glow" />
          <h3 className="mt-5 font-display text-3xl">Dovanos</h3>
          <p className="mt-3 text-pearl/75">Jei norėsite mus pasveikinti, labiausiai džiaugsimės dovana vokelyje.</p>
        </article>
        <article className="border border-pearl/15 bg-pearl/10 p-6 backdrop-blur">
          <HeartHandshake className="h-7 w-7 text-copper-glow" />
          <h3 className="mt-5 font-display text-3xl">Dalyvavimas</h3>
          <p className="mt-3 text-pearl/75">Atsakymo lauksime iki liepos 6 d. Po šios datos registracija užsidarys.</p>
        </article>
        <article className="border border-pearl/15 bg-pearl/10 p-6 backdrop-blur">
          <Sparkles className="h-7 w-7 text-copper-glow" />
          <h3 className="mt-5 font-display text-3xl">Vaikai</h3>
          <p className="mt-3 text-pearl/75">Vaikai laukiami bažnytinėje ceremonijoje. Vakarinė dalis restorane — tik suaugusiems.</p>
        </article>
      </div>
    </section>

    <section id="map" className="container mx-auto grid gap-8 px-6 py-20 lg:grid-cols-2">
      <div>
        <p className="font-script text-6xl text-copper">Vietos</p>
        <h2 className="font-display text-5xl font-semibold text-moss-deep">Kur susitinkame</h2>
      </div>
      <div className="grid gap-4">
        <a className="group border border-border bg-vellum p-6 transition hover:border-copper" href="https://www.google.com/maps/search/?api=1&query=%C5%A0v.+Kazimiero+ba%C5%BEny%C4%8Dia+Vilnius" target="_blank" rel="noreferrer">
          <MapPin className="h-6 w-6 text-copper" />
          <h3 className="mt-3 font-display text-3xl text-moss-deep group-hover:text-copper">Šv. Kazimiero bažnyčia</h3>
          <p className="text-muted-foreground">Didžioji g. 34, Vilnius</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-copper">Atidaryti žemėlapyje →</p>
        </a>
        <a className="group border border-border bg-vellum p-6 transition hover:border-copper" href="https://www.google.com/maps/search/?api=1&query=Elven+restoranas+Vilnius" target="_blank" rel="noreferrer">
          <MapPin className="h-6 w-6 text-copper" />
          <h3 className="mt-3 font-display text-3xl text-moss-deep group-hover:text-copper">Restoranas Elven</h3>
          <p className="text-muted-foreground">L. Stuokos-Gucevičiaus g., Vilnius</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-copper">Atidaryti žemėlapyje →</p>
        </a>
      </div>
    </section>

    <section id="faq" className="container mx-auto px-6 pb-20">
      <div className="mx-auto max-w-3xl">
        <p className="font-script text-6xl text-copper">Klausimai</p>
        <div className="mt-8 divide-y divide-border border-y border-border bg-vellum">
          {[
            ["Kada atvykti?", "Į santuokos ceremoniją prašome atvykti 15–20 min. anksčiau."],
            ["Ar galima su vaikais?", "Į bažnyčią — taip, į vakarinę dalį restorane — ne, vakaras skirtas suaugusiems."],
            ["Koks aprangos kodas?", "Žiūrėkite aprangos spalvas aukščiau: moterims ilgos suknelės, vyrams kostiumai arba švarkai."],
            ["Iki kada atsakyti?", "Dalyvavimą prašome patvirtinti iki liepos 6 d."],
          ].map(([question, answer]) => (
            <details key={question} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-2xl text-moss-deep">
                {question}
                <Clock className="h-5 w-5 text-copper transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 leading-7 text-muted-foreground">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  </main>
);