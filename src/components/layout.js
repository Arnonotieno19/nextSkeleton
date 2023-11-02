import { Inter } from 'next/font/google'
import Navbar from './Navbar'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <div>
      <Head>
        <meta charset="utf-8"></meta>
        <title>Arnon -Portfolio</title>
        <link rel="icon" href="/logo-white.png" />
        <meta name="viewport"
                    content="width=device-width, initial-scale=1.0" />

      </Head>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}
