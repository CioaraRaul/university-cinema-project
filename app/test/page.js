import { getMovieData } from "../_lib/cinema-service-data";

async function page() {
  const id = 2;
  const cinemaData = await getMovieData(id);

  return (
    <div>
      {cinemaData ? `cinemaId = ${cinemaData}` : "No cinema data found."}
    </div>
  );
}

export default page;
