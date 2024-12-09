import AccesingDataMovieById from "../_component/accesingDataMovieById";
import CreateMovieForm from "../_component/CreateMovie";
import ListMovies from "../_component/ListMovies";

function page() {
  return (
    <div>
      <ListMovies />
      <AccesingDataMovieById />
      <CreateMovieForm />
    </div>
  );
}

export default page;
