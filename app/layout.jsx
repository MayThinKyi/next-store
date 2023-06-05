import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './redux/Provider'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { SiderBarProvider } from './context/ContextProvider'
import Cart from '@/components/Cart'
import NextTopLoader from 'nextjs-toploader';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: ' Next Store',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
      <NextTopLoader />
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
