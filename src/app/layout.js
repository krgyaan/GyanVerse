import './globals.css'
import { Roboto } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'

const roboto = Roboto({
  weight: ['300', '400'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Next.js Fullstack App',
  description: 'Created by Gyan with the help of `create next app`',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
