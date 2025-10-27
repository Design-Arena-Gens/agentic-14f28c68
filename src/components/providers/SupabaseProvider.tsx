'use client';

import { useState } from 'react';
import {
  Session,
  SessionContextProvider
} from '@supabase/auth-helpers-react';
import { createBrowserSupabaseClient } from '@/lib/supabase/browser';
import { Database } from '@/lib/database.types';

interface SupabaseProviderProps {
  children: React.ReactNode;
  session: Session | null;
}

export function SupabaseProvider({ children, session }: SupabaseProviderProps) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={session}>
      {children}
    </SessionContextProvider>
  );
}
