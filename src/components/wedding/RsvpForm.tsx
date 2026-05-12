import { FormEvent, useMemo, useState } from "react";
import { Heart } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";

type Guest = {
  id: string;
  slug: string;
  display_name: string;
  greeting: string;
  partner_name: string | null;
  party_size: number;
};

type RsvpFormProps = {
  guest: Guest | null;
  fallbackSlug: string;
};

const deadline = new Date("2026-07-07T00:00:00+03:00");

const splitName = (full: string | null | undefined) => {
  const value = (full ?? "").trim();
  if (!value) return { first: "", last: "" };
  const parts = value.split(/\s+/);
  return { first: parts[0] ?? "", last: parts.slice(1).join(" ") };
};

export const RsvpForm = ({ guest, fallbackSlug }: RsvpFormProps) => {
  const [attending, setAttending] = useState<boolean | null>(null);
  const [saving, setSaving] = useState(false);
  const [thanks, setThanks] = useState<null | "yes" | "no">(null);
  const isCouple = (guest?.party_size ?? 1) >= 2;
  const isClosed = useMemo(() => Date.now() >= deadline.getTime(), []);

  const primary = useMemo(() => splitName(guest?.display_name), [guest?.display_name]);
  const partner = useMemo(() => splitName(guest?.partner_name ?? ""), [guest?.partner_name]);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (attending === null) {
      toast.error("Pasirinkite, ar dalyvausite.");
      return;
    }
    if (isClosed) {
      toast.error("Registracija jau uždaryta.");
      return;
    }

    const form = new FormData(event.currentTarget);
    setSaving(true);
    const { error } = await (supabase as any).rpc("submit_wedding_rsvp", {
      _slug: guest?.slug ?? fallbackSlug,
      _first_name: String(form.get("firstName") ?? primary.first),
      _last_name: String(form.get("lastName") ?? primary.last),
      _partner_first_name: String(form.get("partnerFirstName") ?? ""),
      _partner_last_name: String(form.get("partnerLastName") ?? ""),
      _attending: attending,
      _meal_choice: String(form.get("mealChoice") ?? ""),
      _partner_meal_choice: String(form.get("partnerMealChoice") ?? ""),
      _dietary_notes: String(form.get("dietaryNotes") ?? ""),
      _message: String(form.get("message") ?? ""),
    });
    setSaving(false);

    if (error) {
      toast.error(error.message.includes("RSVP_CLOSED") ? "Registracija jau uždaryta." : "Nepavyko išsaugoti atsakymo.");
      return;
    }

    setThanks(attending ? "yes" : "no");
  };

  return (
    <section id="rsvp" className="relative overflow-hidden bg-vellum py-20">
      {/* subtle floral corners */}
      <div aria-hidden className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,hsl(var(--copper)/0.12),transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,hsl(var(--moss-soft)/0.35),transparent_70%)]" />

      <div className="container relative mx-auto grid gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <h2 className="font-display text-5xl font-semibold leading-none text-moss-deep sm:text-6xl">Dalyvavimo patvirtinimas</h2>
          <p className="mt-6 leading-8 text-muted-foreground">
            Atsakymo lauksime iki <strong className="font-semibold text-moss-deep">2026 m. liepos 6 d.</strong> Po šios datos registracija užsidarys.
          </p>
        </div>

        <form onSubmit={submit} className="paper-grain relative grid gap-5 border border-copper/25 bg-pearl p-6 shadow-[0_28px_70px_hsl(var(--moss-deep)/0.14)] sm:p-8">
          <fieldset disabled={isClosed || saving} className="grid gap-5 disabled:opacity-60">
            {/* Step 1: Attendance */}
            <div className="grid gap-3 sm:grid-cols-2">
              <Button type="button" variant={attending === true ? "moss" : "vellum"} onClick={() => setAttending(true)}>Dalyvausiu</Button>
              <Button type="button" variant={attending === false ? "moss" : "vellum"} onClick={() => setAttending(false)}>Negalėsiu dalyvauti</Button>
            </div>

            {attending === true && (
              <div className="grid gap-5 animate-fade-in">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-moss-deep">
                    Vardas
                    <input name="firstName" defaultValue={primary.first} required className="border border-input bg-background px-4 py-3 font-body text-foreground" />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-moss-deep">
                    Pavardė
                    <input name="lastName" defaultValue={primary.last} required className="border border-input bg-background px-4 py-3 font-body text-foreground" />
                  </label>
                </div>
                <label className="grid gap-2 text-sm font-semibold text-moss-deep">
                  Meniu pasirinkimas
                  <select name="mealChoice" className="border border-input bg-background px-4 py-3 font-body text-foreground">
                    <option value="">Pasirinkti</option>
                    <option value="mesa">Mėsos patiekalas</option>
                    <option value="zuvis">Žuvies patiekalas</option>
                    <option value="vegetariskas">Vegetariškas</option>
                  </select>
                </label>

                {isCouple && (
                  <>
                    <div className="my-2 h-px bg-gradient-to-r from-transparent via-copper/40 to-transparent" />
                    <p className="font-display text-xl text-moss-deep">Antras svečias</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="grid gap-2 text-sm font-semibold text-moss-deep">
                        Vardas
                        <input name="partnerFirstName" defaultValue={partner.first} className="border border-input bg-background px-4 py-3 font-body text-foreground" />
                      </label>
                      <label className="grid gap-2 text-sm font-semibold text-moss-deep">
                        Pavardė
                        <input name="partnerLastName" defaultValue={partner.last} className="border border-input bg-background px-4 py-3 font-body text-foreground" />
                      </label>
                    </div>
                    <label className="grid gap-2 text-sm font-semibold text-moss-deep">
                      Meniu pasirinkimas
                      <select name="partnerMealChoice" className="border border-input bg-background px-4 py-3 font-body text-foreground">
                        <option value="">Pasirinkti</option>
                        <option value="mesa">Mėsos patiekalas</option>
                        <option value="zuvis">Žuvies patiekalas</option>
                        <option value="vegetariskas">Vegetariškas</option>
                      </select>
                    </label>
                  </>
                )}

                <label className="grid gap-2 text-sm font-semibold text-moss-deep">
                  Alergijos
                  <textarea name="dietaryNotes" rows={3} className="border border-input bg-background px-4 py-3 font-body text-foreground" />
                </label>
              </div>
            )}

            {attending !== null && (
              <label className="grid gap-2 text-sm font-semibold text-moss-deep animate-fade-in">
                Žinutė jauniesiems
                <textarea name="message" rows={4} className="border border-input bg-background px-4 py-3 font-body text-foreground" />
              </label>
            )}

            {attending !== null && (
              <Button type="submit" variant="invitation" size="lg" className="animate-fade-in">
                {saving ? "Saugoma..." : isClosed ? "Registracija uždaryta" : "Išsiųsti atsakymą"}
              </Button>
            )}
          </fieldset>
        </form>
      </div>

      <Dialog open={thanks !== null} onOpenChange={(o) => !o && setThanks(null)}>
        <DialogContent className="border-copper/30 bg-pearl text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-copper/15 text-copper animate-scale-in">
            <Heart className="h-8 w-8" />
          </div>
          <DialogTitle className="font-display text-3xl text-moss-deep">
            {thanks === "yes" ? "Ačiū, kad būsite kartu!" : "Ačiū, kad pranešėte"}
          </DialogTitle>
          <DialogDescription className="text-base leading-7 text-muted-foreground">
            {thanks === "yes"
              ? "Su nekantrumu lauksime Jūsų rugsėjo 6 d. Iki greito susitikimo!"
              : "Gaila, kad negalėsite dalyvauti — apkabiname stipriai. Mintimis būsite su mumis."}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </section>
  );
};
