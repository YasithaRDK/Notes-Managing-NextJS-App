"use client";

import { useSession } from "next-auth/react";

const Footer = () => {
  const { data: session } = useSession();
  return (
    <>
      {session && (
        <footer className="py-5 mt-auto bg-white border-t border-gray-300 end-0">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Yasitha Dilshan. All Rights
              Reserved.
            </p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
