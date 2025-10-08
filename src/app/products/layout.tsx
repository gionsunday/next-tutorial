import "../globals.css"



export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <body>
          
          <h2 className="text-center py-6 bg-blue-700 text-white text-xl">This is Product header</h2>
          {children}

        </body>

    </>

  )
}
