import localFont from '@next/font/local'
import './globals.css'

const metropolis = localFont({
  src: [
    {
      path: '../../public/font/Metropolis/Metropolis-Regular.otf',
    }
  ],
  variable: '--font-metropolis'
})
export const metadata = {
  title: 'PollinationX',
  description: 'Decentralized Storage On Demand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${metropolis.variable} font-sans`} lang="en">
      <body>{children}</body>
    </html>
  )
}
