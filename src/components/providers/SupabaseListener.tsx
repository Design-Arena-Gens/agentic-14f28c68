'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Session } from '@supabase/supabase-js';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

export function SupabaseListener({ serverAccessToken }: { serverAccessToken?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const supabase = useSupabaseClient();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' || event === 'SIGNED_OUT' || event === 'TOKEN_REFRESHED') {
        router.refresh();
      }
      if (event === 'PASSWORD_RECOVERY' && session?.user) {
        router.push('/account/reset-password');
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [pathname, router, supabase]);

  useEffect(() => {
    const syncSession = async () => {
      const currentSession = await supabase.auth.getSession();

      if (!serverAccessToken && currentSession.data.session) {
        router.refresh();
      }
    };

    syncSession();
  }, [serverAccessToken, supabase, router]);

  return null;
}
