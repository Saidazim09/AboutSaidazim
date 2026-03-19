import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Saidazim Muqumjonov (VEKIN) | AI Engineer & Developer',
  description: 'Future AI Engineer & Creative Developer | Co-Founder of Tuynuk Market | New Uzbekistan University',
  keywords: ['AI Engineer', 'Developer', 'Tuynuk Market', 'VEKIN', 'Uzbekistan', 'NewUU'],
  authors: [{ name: 'Saidazim Muqumjonov' }],
  icons: {
    icon: [
     {
        url: '/light_favicon.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/dark_favicon.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/main_favicon.jpg',
        type: 'image/jpeg',
      },
    ],
    apple: '/mac_favicon.jpg',
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
