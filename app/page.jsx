"use client";

import Feed from "@/components/Feed";
import Spinner from "@/components/Spinner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Home = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  if (status === "loading" || loading) {
    return <Spinner />;
  } else if (status !== "authenticated") {
    router.push("/login");
    return null;
  }

  return (
    <section className="container flex flex-col items-center justify-center min-h-screen px-5 md:px-24 xl:px-32">
      <h1 className="text-center head_text">
        Welcome
        <br />
        <span className="text-center orange_gradient">
          {session?.user?.name}
        </span>
      </h1>
      <p className="text-center desc">
        Keep your forgettable special notes here and spend your free time
      </p>
      <Feed setLoading={setLoading} />
    </section>
  );
};
export default Home;
