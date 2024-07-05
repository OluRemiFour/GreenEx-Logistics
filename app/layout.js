import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";

// const inter = Poppins({ subsets: ["latin"], weight: "500" });
const inter = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: {
    template: "%s: GreeenEx Logistics",
    default: "GreenEx Logistics",
  },
  description: "Courier services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-full antialiased flex flex-col relative`}
      >
        <div className="flex-1 grid">
          <main className=" w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
