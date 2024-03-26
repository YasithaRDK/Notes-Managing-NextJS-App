import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/sessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QuickNotiZ",
  description: "Add your notes and manage your works easy",
};

const RootLayout = async ({ children }) => {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
