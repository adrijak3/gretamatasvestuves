import { CakeSlice, Camera, Church, Clock, Gift, HeartHandshake, Leaf, MapPin, Shirt, UtensilsCrossed, Wine } from "lucide-react";
import { Countdown } from "./Countdown";

const timeline = [
  { time: "14:40", title: "Atvykimas", icon: Leaf, text: "Prašome atvykti 15–20 min. anksčiau, kad galėtume ramiai pradėti ceremoniją." },
  { time: "15:00", title: "Santuokos ceremonija", icon: Church, text: "Šv. Kazimiero bažnyčia, Vilnius." },
  { time: "16:30", title: "Šampano stalelis", icon: Wine, text: "Pasveikinimai, šampanas ir lengvi užkandžiai jaukioje aplinkoje." },
  { time: "17:00", title: "Laisvas laikas (fotosesija)", icon: Camera, text: "Trumpa pertrauka — laikas jaunųjų fotosesijai, o jums — pasivaikščioti." },
  { time: "18:00–20:00", title: "Vakarinė dalis", icon: UtensilsCrossed, text: "Restoranas Elven. Vakarienė, tostai ir vakaro pradžia. N20." },
  { time: "21:00", title: "Šokiai ir tortas", icon: CakeSlice, text: "Pirmasis šokis, tortas ir nakties šventė kartu su jumis." },
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
        <p className="font-display italic text-3xl text-copper sm:text-4xl">Kviečiame švęsti kartu</p>
        <h2 className="mt-3 max-w-3xl font-display text-6xl font-semibold leading-[0.88] text-moss-deep sm:text-7xl lg:text-8xl">
          Greta &amp; Matas
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
          Rugsėjo 6 dieną kviečiame Jus pasitikti mūsų svarbiausią dieną — su žmonėmis, kurie mums brangūs. Lauksime Jūsų jaukioje, šiltoje ir mūsų šventėje.
        </p>
      </div>
      <div className="paper-grain relative overflow-hidden border border-copper/30 bg-vellum p-7 animate-fade-in-slow hover:shadow-[0_36px_90px_hsl(var(--moss-deep)/0.25)] transition-shadow duration-500 shadow-[0_30px_80px_hsl(var(--moss-deep)/0.18)]">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-copper/20" />
        <p className="font-display text-sm uppercase tracking-[0.32em] text-moss">2026 • 09 • 06</p>
        <div className="mt-8 space-y-6">
          <div className="flex gap-4">
            <Church className="mt-1 h-6 w-6 text-copper" />
            <div>
              <h3 className="font-display text-3xl text-moss-deep">Šv. Kazimiero bažnyčia</h3>
              <p className="text-muted-foreground">Ceremonija 15:00</p>
            </div>
          </div>
          <div className="flex gap-4">
            <UtensilsCrossed className="mt-1 h-6 w-6 text-copper" />
            <div>
              <h3 className="font-display text-3xl text-moss-deep">Restoranas Elven</h3>
              <p className="text-muted-foreground">Vakarinė dalis 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Countdown />

    <section id="schedule" className="container mx-auto px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display italic text-3xl uppercase tracking-[0.45em] text-copper">Programa</p>
        <h2 className="font-display text-5xl font-semibold text-moss-deep sm:text-6xl">Dienos eiga</h2>
      </div>
      <div className="relative mx-auto mt-14 max-w-4xl">
        {/* dotted pathway connecting all program steps */}
        <div
          className="absolute left-6 top-0 h-full w-px sm:left-1/2"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, hsl(var(--copper)/0.7) 0 8px, transparent 8px 16px)",
          }}
        />
        {timeline.map((item, index) => (
          <div
            key={item.title}
            className={`relative mb-10 grid gap-6 sm:grid-cols-2 ${index % 2 ? "sm:text-left" : "sm:text-right"}`}
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <div className={index % 2 ? "sm:col-start-2" : ""}>
              <div className="paper-grain relative overflow-hidden border border-copper/25 bg-vellum p-6 shadow-[0_18px_48px_hsl(var(--moss-deep)/0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_hsl(var(--moss-deep)/0.2)] animate-fade-in-slow">
                <div className={`flex items-center gap-3 ${index % 2 ? "" : "sm:justify-end"}`}>
                  <span className="grid h-11 w-11 place-items-center border border-copper/30 bg-pearl text-copper shadow-[0_10px_26px_hsl(var(--moss-deep)/0.12)]">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-5xl font-semibold text-copper">{item.time}</span>
                </div>
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
      <div className="container mx-auto grid gap-5 px-6 md:grid-cols-3">
        <article className="border border-pearl/15 bg-pearl/10 p-6 backdrop-blur animate-fade-in hover:bg-pearl/20 hover:-translate-y-1 transition-all duration-300">
          <Shirt className="h-7 w-7 text-copper-glow" />
          <h3 className="mt-5 font-display text-3xl">Aprangos kodas</h3>
          <p className="mt-3 text-pearl/75">Moterys — ilgos suknelės, vyrai — kostiumai ar švarkai. Venkite baltos, bordo ir labai šviesių tonų.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {dressColors.map((color) => (
              <span key={color.name} title={color.name} className={`h-8 w-8 rounded-full border border-pearl/35 ${color.className}`} />
            ))}
          </div>
        </article>
        <article className="border border-pearl/15 bg-pearl/10 p-6 backdrop-blur animate-fade-in hover:bg-pearl/20 hover:-translate-y-1 transition-all duration-300">
          <Gift className="h-7 w-7 text-copper-glow" />
          <h3 className="mt-5 font-display text-3xl">Dovanos</h3>
          <p className="mt-3 text-pearl/75">Jei norėsite mus pasveikinti, labiausiai džiaugsimės dovana vokelyje.</p>
        </article>
        <article className="border border-pearl/15 bg-pearl/10 p-6 backdrop-blur animate-fade-in hover:bg-pearl/20 hover:-translate-y-1 transition-all duration-300">
          <HeartHandshake className="h-7 w-7 text-copper-glow" />
          <h3 className="mt-5 font-display text-3xl">Dalyvavimas</h3>
          <p className="mt-3 text-pearl/75">Atsakymo lauksime iki liepos 6 d. Po šios datos registracija užsidarys.</p>
        </article>
      </div>
    </section>

    <section id="map" className="container mx-auto px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-display italic text-3xl uppercase tracking-[0.45em] text-copper">Kur susitikime?</p>
        <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-copper to-transparent" />
      </div>
      <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
        <a className="group border border-border bg-vellum p-6 transition-all duration-300 hover:border-copper hover:-translate-y-1 hover:shadow-[0_18px_40px_hsl(var(--moss-deep)/0.15)] animate-fade-in" href="https://www.google.com/maps/search/?api=1&query=%C5%A0v.+Kazimiero+ba%C5%BEny%C4%8Dia+Vilnius" target="_blank" rel="noreferrer">
          <MapPin className="h-6 w-6 text-copper" />
          <h3 className="mt-3 font-display text-3xl text-moss-deep group-hover:text-copper">Šv. Kazimiero bažnyčia</h3>
          <p className="text-muted-foreground">Didžioji g. 34, Vilnius</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-copper">Atidaryti žemėlapyje →</p>
        </a>
        <a className="group border border-border bg-vellum p-6 transition-all duration-300 hover:border-copper hover:-translate-y-1 hover:shadow-[0_18px_40px_hsl(var(--moss-deep)/0.15)] animate-fade-in" href="https://www.google.com/maps/search/?api=1&query=Elven+restoranas+L.+Stuokos-Guceviciaus+9-1+Vilnius" target="_blank" rel="noreferrer">
          <UtensilsCrossed className="h-6 w-6 text-copper" />
          <h3 className="mt-3 font-display text-3xl text-moss-deep group-hover:text-copper">Restoranas Elven</h3>
          <p className="text-muted-foreground">L. Stuokos-Gucevičiaus g. 9-1, Vilnius</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-copper">Atidaryti žemėlapyje →</p>
        </a>
      </div>
    </section>

    <section id="faq" className="container mx-auto px-6 pb-20">
      <div className="mx-auto max-w-3xl">
        <p className="font-display italic text-3xl uppercase tracking-[0.45em] text-copper">Klausimai</p>
        <div className="mt-8 divide-y divide-border border-y border-border bg-vellum">
          {[
            ["Kada atvykti?", "Į santuokos ceremoniją prašome atvykti 15–20 min. anksčiau."],
            ["Ar galima su vaikais?", "Į bažnyčią — taip, į vakarinę dalį restorane — ne, vakaras skirtas suaugusiems."],
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
