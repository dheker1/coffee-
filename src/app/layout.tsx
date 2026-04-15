import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sedna Coffee - Premium Coffee Experience',
  description: 'Discover authentic, premium coffee at Sedna. Handcrafted blends, cozy atmosphere, and unforgettable taste.',
  keywords: 'coffee, cafe, Sedna, premium coffee, specialty coffee',
  authors: [{ name: 'Sedna Coffee' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
