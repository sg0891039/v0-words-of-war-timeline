import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Words of War — A Timeline',
  description: 'Every verified public statement by the 47th President of the United States on the Iran conflict — documented, timestamped, sourced.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
