import { PokemosResponse, SimplePokemon, PokemonGrid } from "@/pokemons";

export const metadata = {
  title: "151 Pokémons",
  description: "151 Pokémons.",
};

const getPokemos = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemosResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json() as Promise<PokemosResponse>);

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemos(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        List of Pokemon <small className="text-blue-500">Static</small>
      </span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
