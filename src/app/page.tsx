import Image from 'next/image';
import Link from 'next/link';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { PawFeatureGrid } from '@/components/sections/PawFeatureGrid';
import { Testimonials } from '@/components/sections/Testimonials';
import { Footer } from '@/components/sections/Footer';

const heroImageSrc =
  'https://images.pexels.com/photos/5731863/pexels-photo-5731863.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default async function LandingPage() {
  const supabase = createServerSupabaseClient();
  const {
    data: { session }
  } = await supabase.auth.getSession();

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 via-cream to-white">
      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroImageSrc}
            alt="A joyful collage of pets enjoying the outdoors"
            fill
            priority
            className="object-cover object-center brightness-[0.65]"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/65" aria-hidden="true" />

        <div className="mx-auto flex min-h-[80vh] w-full max-w-7xl flex-col items-start justify-center px-6 py-24 sm:px-10 lg:px-16">
          <p className="font-display text-lg uppercase tracking-[0.3em] text-orange-200">Welcome to Petgram</p>
          <h1 className="mt-6 font-display text-4xl text-cream sm:text-5xl lg:text-6xl">
            Celebrate every wag, purr, chirp, and splash.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/90 sm:text-xl">
            Petgram is the playful social media platform crafted just for animals and the humans who adore them. Share your pet&apos;s
            proudest moments, discover new furry friends by breed or location, and build a thriving community that celebrates compassion
            and care.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink href={session ? '/feed' : '/auth/register'} variant="accent" size="lg">
              Sign Up
            </ButtonLink>
            <ButtonLink href={session ? '/feed' : '/auth/login'} variant="secondary" size="lg">
              Learn More
            </ButtonLink>
          </div>
        </div>
      </header>

      <PawFeatureGrid />
      <Testimonials />
      <Footer />
    </main>
  );
}
