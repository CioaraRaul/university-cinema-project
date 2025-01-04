import NavbarHome from "@/app/_component/NavbarHome";
import ContentHomepage from "../_component/ContentHomepage";

export const metadata = {
  title: "Homepage",
};

async function Page({ searchParams }: { searchParams: any }) {
  const searchParamsAwait = await searchParams;
  const username = searchParamsAwait?.username || "";
  const email = searchParamsAwait?.email || "";
  const password = searchParamsAwait?.password || "";
  const image = searchParamsAwait?.image || "default-profile-picture.png";

  return (
    <div className="bg-witcher h-screen relative z-0 inset-0 bg-cover bg-center flex flex-col">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <NavbarHome
        image={image}
        username={username}
        password={password}
        email={email}
      />

      <ContentHomepage />
    </div>
  );
}

export default Page;
