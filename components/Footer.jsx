"use client";

import { useSession } from "next-auth/react";

const Footer = () => {
  const { data: session } = useSession();
  return (
    <>
      {session && (
        <footer className="py-5 mt-10 bg-white border-t border-gray-300  bottom-0 w-full">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="#">Yasitha Dilshan</a>
            </p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
