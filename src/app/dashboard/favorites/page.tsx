import { PokemosResponse, SimplePokemon, PokemonGrid } from "@/pokemons";

export const metadata = {
  title: "Favorites",
  description: "Favorites",
};

export default async function FavoritesPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Favorites Pokemon <small className="text-blue-500">Global State</small>
      </span>

      <PokemonGrid pokemons={[]} />
    </div>
  );
}
