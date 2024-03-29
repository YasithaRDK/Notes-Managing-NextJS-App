import { Open_Sans } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/sessionProvider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const roboto = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "QuickNoteZ",
  description: "Organize notes effortlessly with QuickNoteZ!",
  icons: {
    icon: ["./favicon.png"],
  },
};

const RootLayout = async ({ children }) => {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={roboto.className}>
        <SessionProvider session={session}>
          <Toaster position="top-right" />
          <Navbar />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
