import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Geist, Geist_Mono, Montserrat } from 'next/font/google';
import NavBar from '@/components/layout/nav-bar';
import DynamicParticlesBackgroundWrapper from '@/components/shared/dynamic-particles-background-wrapper';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'João Carvalho',
  description: 'Portfolio website of full stack developer João Carvalho.',
  keywords: [
    'João Carvalho',
    'software engineer',
    'full stack developer',
    'web developer',
    'portfolio',
  ],
  authors: [{ name: 'João Carvalho', url: siteUrl }],
  creator: 'João Carvalho',
  publisher: 'João Carvalho',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'João Carvalho',
    title: 'João Carvalho',
    description: 'Portfolio website of full stack developer João Carvalho.',
    images: [
      {
        url: '/001.png',
        width: 1200,
        height: 630,
        alt: 'João Carvalho',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'João Carvalho',
    description: 'Portfolio website of full stack developer João Carvalho.',
    images: ['/001.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.png',
  },
  category: 'Technology',
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
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider skipDelayDuration={300} disableHoverableContent={true}>
            <div className="max-w-screen-2xl mx-auto grid grid-rows-[auto_1fr_auto] min-h-screen ">
              <header>
                <NavBar />
              </header>
              <main className="px-8 mt-4 md:mt-10">{children}</main>
              <footer className="text-center font-sans text-xs sm:text-sm text-muted-foreground py-4 mt-8 mb-6">
                &copy; João Carvalho 2025
              </footer>
            </div>
          </TooltipProvider>
          <DynamicParticlesBackgroundWrapper />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
