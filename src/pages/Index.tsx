import { useEffect, useMemo, useState } from "react";
import { AdminPanel } from "@/components/wedding/AdminPanel";
import { Countdown } from "@/components/wedding/Countdown";
import { MusicPlayer } from "@/components/wedding/MusicPlayer";
import { OpeningLetter } from "@/components/wedding/OpeningLetter";
import { Petals } from "@/components/wedding/Petals";
import { RsvpForm } from "@/components/wedding/RsvpForm";
import { WeddingContent } from "@/components/wedding/WeddingContent";
import { supabase } from "@/integrations/supabase/client";

type Guest = {
  id: string;
  slug: string;
  display_name: string;
  greeting: string;
  partner_name: string | null;
  party_size: number;
};

const fallbackGuest: Guest = {
  id: "",
  slug: "mieli-sveciai",
  display_name: "Mieli svečiai",
  greeting: "Mieli svečiai,",
  partner_name: null,
  party_size: 2,
};

const Index = () => {
  const [opened, setOpened] = useState(false);
  const [guest, setGuest] = useState<Guest | null>(fallbackGuest);
  const slug = useMemo(() => new URLSearchParams(window.location.search).get("s") || "mieli-sveciai", []);

  useEffect(() => {
    let alive = true;
    (supabase as any)
      .rpc("get_wedding_guest", { _slug: slug })
      .then(({ data }: { data: Guest[] | null }) => {
        if (!alive) return;
        setGuest(data?.[0] ?? fallbackGuest);
      });
    return () => {
      alive = false;
    };
  }, [slug]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Petals />
      {!opened && <OpeningLetter greeting={guest?.greeting ?? fallbackGuest.greeting} onOpen={() => setOpened(true)} />}
      <MusicPlayer enabled={opened} />
      <WeddingContent />
      <Countdown />
      <RsvpForm guest={guest} fallbackSlug={slug} />
      <AdminPanel />
    </div>
  );
};

export default Index;