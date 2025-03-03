
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Mst Store | E-commost',
    template: '%s | E-commost'
  },
  description:'ร้านค้าออนไลน์สำหรับข้าวคุณภาพ ราคาดีเข้าถึงได้'
}

interface RootLayoutProps{
  children: React.ReactNode
}

const RootLayout = ({children} : RootLayoutProps) => {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  )
}
export default RootLayout