import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyBookButton } from "@/components/StickyBookButton";
import { site } from "@/lib/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Romanazzi's Restaurant | Cucina di Mare sul Porto di Giovinazzo",
    template: "%s | Romanazzi's Restaurant",
  },
  description:
    "Ristorante fine dining di pesce a Giovinazzo (Bari), affacciato sul porticciolo all'interno del Torrione Aragonese. Cucina dello Chef Giuseppe Romanazzi.",
  metadataBase: new URL("https://www.romanazzis.it"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Romanazzi's Restaurant",
  image: "https://www.romanazzis.it/wp-content/uploads/2025/10/Ristoranti-Giovinazzo-Romanazzis-14.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Piazza Porto, 32",
    addressLocality: "Giovinazzo",
    addressRegion: "BA",
    postalCode: "70054",
    addressCountry: "IT",
  },
  telephone: site.phone,
  servesCuisine: "Cucina di Mare / Fine Dining",
  priceRange: "€€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
      ],
      opens: "12:30",
      closes: "14:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
      ],
      opens: "19:30",
      closes: "22:30",
    },
  ],
  sameAs: [site.social.facebook, site.social.instagram, site.social.tripadvisor],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyBookButton />
      </body>
    </html>
  );
}
