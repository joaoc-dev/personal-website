import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Geist, Geist_Mono, Montserrat } from 'next/font/google';
import NavBar from '@/components/layout/nav-bar';
import ParticlesBackground from '@/components/shared/particles-background';
import { ThemeProvider } from '@/components/ui/theme-provider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'João Carvalho',
  description: 'Portfolio website of full stack developer João Carvalho',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-screen-xl mx-auto grid grid-rows-[auto_1fr_auto] min-h-screen">
            <header>
              <NavBar />
            </header>
            <main>{children}</main>
            <footer className="text-center text-sm py-4 mt-8">
              &copy; João Carvalho 2025
            </footer>
          </div>
          {children}
          <ParticlesBackground />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
