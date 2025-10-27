import Link from 'next/link';

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Help Center', href: '/help' },
  { label: 'Community Guidelines', href: '/guidelines' }
];

export function Footer() {
  return (
    <footer className="border-t border-bark/10 bg-primary-900 text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div>
          <p className="font-display text-2xl">Petgram</p>
          <p className="mt-2 max-w-md text-sm text-cream/60">
            Built with compassion for every creature great and small. Share your pet’s adventures and uplift other animal stories along
            the way.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-4 text-sm text-cream/70">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Petgram. All paws reserved.
      </div>
    </footer>
  );
}
