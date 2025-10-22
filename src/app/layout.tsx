import NavBar from "@/components/NavBar";
import './globals.css';
// import { ErrorWrapper } from "./error-wrapper"

export const metadata = {
  title: {
    default: "Next.js App",
    template: "%s | first app",
    absolute: "Next.js App",
  },
  description: "Generated developer by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {/* <input
          type="text"
          placeholder="type here..."
          className="border border-gray-400 p-2 rounded-md"
        /> */}
        {/* <ErrorWrapper > */}
          {children}
        {/* </ErrorWrapper> */}


      </body>
    </html>
  );
}
