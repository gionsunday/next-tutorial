import "./globals.css"
import NavBar from "@/components/NavBar";

export const metadata = {
  title: {
    default: 'Next.js App',
    template: '%s | first app',
    absolute: " Next.js App"
  },
  description: 'Generated developer by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <body>

          <NavBar />
          {children}

          <h2 className="text-center py-6 bg-red-700 text-white text-xl">This is footer</h2>

        </body>

      </html>

    </>

  )
}
