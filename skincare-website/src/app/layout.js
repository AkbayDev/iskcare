import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Institut Skincare Project",
  description: "Premium skincare, microneedling, and anti-aging treatments at Institut SkinCare Project in Etterbeek, Brussels. Prenez soin de vous aujourd'hui!",
  openGraph: {
    title: "Institut SkinCare Project | Skincare Clinic Brussels",
    description: "Book your luxury facial or anti-aging treatment today.",
    url: "https://skincareproject.be", // Verander dit later naar het echte domein
    siteName: "Institut SkinCare Project",
    locale: "fr_BE",
    type: "website",
    images: [
      {
        url: '/images/hero.webp', // Zorg dat dit een mooie foto is voor als mensen je link delen op WhatsApp/Facebook
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
