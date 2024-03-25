import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col">
      <h1 className="head_text text-center">
        Welcome
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Yasitha</span>
      </h1>
      <p className="desc text-center">
        Keep your forgettable special notes here and spend your free time
      </p>
      <Feed />
    </section>
  );
};
export default Home;
