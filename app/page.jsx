"use client";

import Feed from "@/components/Feed";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Home = () => {
  const { data: session } = useSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <h1 className="text-center head_text">
        Welcome
        <br className="max-md:hidden" />
        <span className="text-center orange_gradient">
          {session?.user?.name}
        </span>
      </h1>
      <p className="text-center desc">
        Keep your forgettable special notes here and spend your free time
      </p>
      <Feed />
    </section>
  );
};
export default Home;
