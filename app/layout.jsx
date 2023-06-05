import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './redux/Provider'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { SiderBarProvider } from './context/ContextProvider'
import Cart from '@/components/Cart'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <SiderBarProvider>
        <Providers>
       <Navbar/>
       <Sidebar/>
       <Cart/>
        {children}

        </Providers>
        </SiderBarProvider>
        </body>
    </html>
  )
}
