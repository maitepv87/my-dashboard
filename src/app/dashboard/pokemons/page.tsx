import { PokemosResponse, SimplePokemon, PokemonGrid } from "@/app/pokemons";

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
        List of Pokemon <small>Static</small>
      </span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
