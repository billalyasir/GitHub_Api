import axios from "axios";
import Image from "next/image";

const Home = ({ data }) => {
  return (
    <div className="min-h-screen pb-12 overflow-hidden bg-[#222]">
      <div className="container mt-[50px] m-auto">
        <h1 className="text-white text-4xl uppercase">
          User List From Github Api.
        </h1>
        <hr className="mt-[20px]" />

        <div className="grid mt-10 px-6 sm:px-0 md:grid-cols-3 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((x) => (
            <div key={x.id}>
              <div className="py-4 px-2 bg-black">
                <div className="text-center block  max-w-[6rem] m-auto">
                  <Image
                    className="rounded-full"
                    src={x.avatar_url}
                    width={100}
                    height={100}
                    alt={x.login}
                  />
                </div>
                <h1 className="text-white text-center mt-2">
                  {" "}
                  Username : {x.login}
                </h1>
                <a target="_blank" rel="noreferrer" className="text-white" href={x.html_url}>
                  <button className="btn mt-3 m-auto block w-full bg-[#222] py-2 px-3">
                    Visit Profile
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// This gets called on every request
export async function getServerSideProps() {
  const { data } = await axios.get("https://api.github.com/users");

  return { props: { data } };
}
export default Home;
