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
    <section className="flex flex-col items-center px-5 mx-auto lg:my-16 min-h-screen">
      <h1 className="text-center head_text">
        Welcome{" "}
        <span className="text-center orange_gradient">
          {session?.user?.name}
        </span>
      </h1>
      <p className="text-center desc">
        Organize notes effortlessly with our app! Boost productivity and stay
        clutter-free. Try it now!
      </p>
      <Feed setLoading={setLoading} session={session} />
    </section>
  );
};
export default Home;
