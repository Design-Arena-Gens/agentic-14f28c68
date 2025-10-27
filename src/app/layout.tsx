import type { Metadata } from 'next';
import { Work_Sans, Baloo_2 } from 'next/font/google';
import './globals.css';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { SupabaseProvider } from '@/components/providers/SupabaseProvider';
import { SupabaseListener } from '@/components/providers/SupabaseListener';

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

const baloo = Baloo_2({
  variable: '--font-baloo',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Petgram | Share the Joy of Pets',
  description:
    'Petgram is the playful yet professional social media platform exclusively for animals. Share adorable moments, connect with other pet lovers, and celebrate every wag, purr, and chirp.'
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = createServerSupabaseClient();
  const {
    data: { session }
  } = await supabase.auth.getSession();

  return (
    <html lang="en" className={`${workSans.variable} ${baloo.variable}`}>
      <body className="bg-cream text-bark">
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
