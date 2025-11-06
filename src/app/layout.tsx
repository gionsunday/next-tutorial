import NavBar from "@/components/NavBar";
import './globals.css';
// import { ErrorWrapper } from "./error-wrapper"
import { AuthProvider } from "./context/AuthContext";

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
        <AuthProvider>
          <NavBar />
          {/* <input
          type="text"
          placeholder="type here..."
          className="border border-gray-400 p-2 rounded-md"
        /> */}
          {/* <ErrorWrapper > */}
          {children}
          {/* </ErrorWrapper> */}
          <div>Footer</div>
        </AuthProvider>

      </body>
    </html>
  );
}
