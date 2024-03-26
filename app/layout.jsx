import { Open_Sans } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/sessionProvider";

const roboto = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "QuickNotiZ",
  description: "Add your notes and manage your works easy",
};

const RootLayout = async ({ children }) => {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={roboto.className}>
        <SessionProvider session={session}>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
