import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-primary-50">
      <header className="flex items-center justify-between px-6 py-5 sm:px-10">
        <Link href="/" className="font-display text-2xl text-bark">
          Petgram
        </Link>
        <Link href="/auth/login" className="text-sm text-bark/60 hover:text-bark">
          Already have an account?
        </Link>
      </header>
      <main className="flex grow items-center justify-center px-6 py-10 sm:px-10">
        <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-card sm:p-10">{children}</div>
      </main>
    </div>
  );
}
