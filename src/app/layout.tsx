export const metadata = {
  title: 'jung portfolio',
  description: '정재연의 포트폴리오 입니다.',
}
import "./globals.scss";

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
