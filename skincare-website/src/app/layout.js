import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Institut SkinCare Project | Skincare Clinic Brussels — Anti-Aging, Microneedling & Korean Facials",
  description:
    "Premium skincare, microneedling, Korean facials, and anti-aging treatments at Institut SkinCare Project in Etterbeek, Brussels. Book your luxurious consultation today! Prenez soin de vous aujourd'hui!",
  keywords: [
    "skincare Brussels",
    "anti-aging treatments Etterbeek",
    "microneedling Brussels",
    "Korean skincare Belgium",
    "facial treatments Brussels",
    "chemical peel Brussels",
    "waxing Brussels",
    "lash extensions Brussels",
    "beauty clinic Etterbeek",
    "Institut SkinCare Project",
    "soins du visage Bruxelles",
    "épilation Bruxelles",
    "anti-âge Bruxelles",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.iskcare.be",
  },
  openGraph: {
    title: "Institut SkinCare Project | Premium Skincare Clinic Brussels",
    description:
      "Book your luxury facial, anti-aging, or Korean skincare treatment at our calming clinic in Etterbeek, Brussels. 90+ five-star Google reviews.",
    url: "https://www.iskcare.be",
    siteName: "Institut SkinCare Project",
    locale: "fr_BE",
    type: "website",
    images: [
      {
        url: "https://www.iskcare.be/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Institut SkinCare Project — Premium skincare clinic in Brussels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Institut SkinCare Project | Skincare Clinic Brussels",
    description:
      "Premium anti-aging, microneedling & Korean skincare treatments in Etterbeek, Brussels.",
    images: ["https://www.iskcare.be/images/hero.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Institut SkinCare Project",
  alternateName: "ISKCare Project",
  description:
    "Premium skincare clinic specializing in Korean skincare, anti-aging treatments, microneedling, chemical peels, waxing, and beauty services in Etterbeek, Brussels.",
  url: "https://www.iskcare.be",
  telephone: "+32486218288",
  email: "iskcareproject@gmail.be",
  image: "https://www.iskcare.be/images/hero.webp",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rue de Ramskapelle 2",
    addressLocality: "Etterbeek",
    postalCode: "1040",
    addressRegion: "Brussels",
    addressCountry: "BE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.8398188,
    longitude: 4.3879201,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "90",
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "10:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "15:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "11:00", closes: "20:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "11:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "11:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "11:00", closes: "15:00" },
  ],
  sameAs: [
    "https://www.facebook.com/InstitutSkinCareProject",
    "https://www.instagram.com/iskcare",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
