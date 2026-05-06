import { FormEvent, useMemo, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
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

export const RsvpForm = ({ guest, fallbackSlug }: RsvpFormProps) => {
  const [attending, setAttending] = useState(true);
  const [saving, setSaving] = useState(false);
  const isCouple = (guest?.party_size ?? 2) === 2;
  const isClosed = useMemo(() => Date.now() >= deadline.getTime(), []);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isClosed) {
      toast.error("Registracija jau uždaryta.");
      return;
    }

    const form = new FormData(event.currentTarget);
    setSaving(true);
    const { error } = await (supabase as any).rpc("submit_wedding_rsvp", {
      _slug: guest?.slug ?? fallbackSlug,
      _first_name: String(form.get("firstName") ?? ""),
      _last_name: String(form.get("lastName") ?? ""),
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

    toast.success("Ačiū — atsakymas išsaugotas.");
  };

  return (
    <section id="rsvp" className="relative overflow-hidden bg-vellum py-20">
      <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="font-script text-6xl text-copper">RSVP</p>
          <h2 className="font-display text-5xl font-semibold leading-none text-moss-deep sm:text-6xl">Dalyvavimo patvirtinimas</h2>
          <p className="mt-6 leading-8 text-muted-foreground">
            Atsakymo lauksime iki <strong className="font-semibold text-moss-deep">liepos 6 d.</strong> Po šios datos registracija užsidarys.
          </p>
          {guest && <p className="mt-6 font-display text-3xl text-moss">{guest.greeting}</p>}
        </div>

        <form onSubmit={submit} className="paper-grain relative grid gap-5 border border-copper/25 bg-pearl p-6 shadow-[0_28px_70px_hsl(var(--moss-deep)/0.14)] sm:p-8">
          <fieldset disabled={isClosed || saving} className="grid gap-5 disabled:opacity-60">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-moss-deep">
                Vardas
                <input name="firstName" required className="border border-input bg-background px-4 py-3 font-body text-foreground" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-moss-deep">
                Pavardė
                <input name="lastName" required className="border border-input bg-background px-4 py-3 font-body text-foreground" />
              </label>
            </div>

            {isCouple && (
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-moss-deep">
                  Antro svečio vardas
                  <input name="partnerFirstName" className="border border-input bg-background px-4 py-3 font-body text-foreground" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-moss-deep">
                  Antro svečio pavardė
                  <input name="partnerLastName" className="border border-input bg-background px-4 py-3 font-body text-foreground" />
                </label>
              </div>
            )}

            <div className="grid gap-3 sm:grid-cols-2">
              <Button type="button" variant={attending ? "moss" : "vellum"} onClick={() => setAttending(true)}>Dalyvausiu</Button>
              <Button type="button" variant={!attending ? "moss" : "vellum"} onClick={() => setAttending(false)}>Negalėsiu dalyvauti</Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
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
                <label className="grid gap-2 text-sm font-semibold text-moss-deep">
                  Antro svečio meniu
                  <select name="partnerMealChoice" className="border border-input bg-background px-4 py-3 font-body text-foreground">
                    <option value="">Pasirinkti</option>
                    <option value="mesa">Mėsos patiekalas</option>
                    <option value="zuvis">Žuvies patiekalas</option>
                    <option value="vegetariskas">Vegetariškas</option>
                  </select>
                </label>
              )}
            </div>

            <label className="grid gap-2 text-sm font-semibold text-moss-deep">
              Mitybos pastabos
              <textarea name="dietaryNotes" rows={3} className="border border-input bg-background px-4 py-3 font-body text-foreground" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-moss-deep">
              Žinutė jauniesiems
              <textarea name="message" rows={4} className="border border-input bg-background px-4 py-3 font-body text-foreground" />
            </label>

            <Button type="submit" variant="invitation" size="lg">
              {saving ? "Saugoma..." : isClosed ? "Registracija uždaryta" : "Išsiųsti atsakymą"}
            </Button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};