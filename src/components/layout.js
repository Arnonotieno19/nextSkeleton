// import { Inter } from 'next/font-inter'; 
import Navbar from './Navbar';
import Head from 'next/head';

// const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Modern digital solution in kenya</title>
        <link rel="icon" href="/favicon.png" />

        {/* Open Graph (OG) meta tags */}
        <meta property="og:url" content="http://www.africomltd.com" />
        <meta property="og:title" content="Modern digital solution in kenya" />
        <meta property="og:site_name" content="Africom Media limited" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="%PUBLIC_URL%/og-banner.png" />
        <meta property="og:locale" content="en_KE" />
        <meta property="og:description" content="Unlocking the next level in digital solution, branding, SMS, Content Aggregation, and billing as well as Fintech in Kenya" />

        {/* Common meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Unlocking the next level in digital solution, branding, SMS, Content Aggregation, and billing as well as Fintech in Kenya" />
        <meta name="keywords" content="vas, loans, branding, digital, Africom media, best vas company in Kenya, mobile money, M-Pesa, digital marketing in Nairobi, online advertising Kenya" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

        {/* Manifest and font preconnect links */}
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
