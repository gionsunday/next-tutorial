
import NavBar from "@/components/NavBar";
import './globals.css';
// import { ErrorWrapper } from "./error-wrapper"
import { AuthProvider } from "./context/AuthContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeContextProvider } from "./context/ThemeContext";



// export const metadata = {
//   title: {
//     default: "Next.js App",
//     template: "%s | first app",
//     absolute: "Next.js App",
//   },
//   description: "Generated developer by Next.js",
// };



export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">


      <body>
        <ThemeContextProvider>
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
        </ThemeContextProvider>
      </body>
    </html>
  );
}
