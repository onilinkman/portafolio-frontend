import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="min-h-screen text-foreground bg-background font-sans antialiased snap-y snap-mandatory">
      <body>{children}</body>
    </html>
  );
}
