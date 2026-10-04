import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider, THEME_INIT_SCRIPT } from "@/components/theme/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Euphorium — Building trust layer by layer.",
  description:
    "Euphorium is a social-commerce hybrid where creators and sellers build trust, one verified layer at a time.",
  applicationName: "Euphorium",
  openGraph: {
    title: "Euphorium",
    description: "Building trust layer by layer.",
    siteName: "Euphorium",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#1a2421" },
    { media: "(prefers-color-scheme: light)", color: "#f3e9da" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col bg-night text-ink">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
