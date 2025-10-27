import { PawPrint, Search, Upload, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    title: 'Masonry Wonderwall',
    description:
      'Enjoy an adaptive masonry feed that spotlights every furry superstar, with autoplaying videos and vibrant stills.',
    icon: PawPrint,
    accent: 'from-primary-500 to-primary-700'
  },
  {
    title: 'Discover Kindred Spirits',
    description:
      'Search by breed, location, or vibe to discover animals that match your pet’s personality and build meaningful connections.',
    icon: Search,
    accent: 'from-bark to-primary-600'
  },
  {
    title: 'Create Effortlessly',
    description:
      'Upload photos and videos with drag-and-drop simplicity, smart compression, tagging, and instant previews.',
    icon: Upload,
    accent: 'from-accent to-bark'
  },
  {
    title: 'Stay in the Loop',
    description:
      'Never miss a cheer. Notifications highlight new likes, comments, and followers in real-time.',
    icon: Bell,
    accent: 'from-primary-400 to-accent'
  }
];

export function PawFeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <div className="text-center">
        <p className="font-display text-sm uppercase tracking-[0.5em] text-primary-600">Built for joyful storytelling</p>
        <h2 className="mt-4 font-display text-3xl text-bark sm:text-4xl">Playful yet professional, from tip to tail.</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-bark/70">
          Petgram elevates animal stories with thoughtful details. Every screen is crafted to honor pet personalities while keeping the
          experience polished, accessible, and lightning fast.
        </p>
      </div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-card transition-transform hover:-translate-y-1 focus-within:-translate-y-1"
          >
            <div className={cn('absolute inset-0 -z-10 bg-gradient-to-br opacity-0 transition group-hover:opacity-10', feature.accent)} />
            <feature.icon className="h-12 w-12 text-accent" aria-hidden="true" />
            <h3 className="mt-6 font-display text-2xl text-bark">{feature.title}</h3>
            <p className="mt-4 text-bark/70">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
