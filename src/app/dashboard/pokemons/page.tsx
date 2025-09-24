import { PokemosResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";

const getPokemos = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemosResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json() as Promise<PokemosResponse>);

  const pokemos = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemos;
};

export default async function PokemonsPage() {
  const pokemos = await getPokemos(151);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemos.map((pokemon) => {
          return (
            <Image
              key={pokemon.id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt={pokemon.name}
              width={100}
              height={100}
            />
          );
        })}
      </div>
    </div>
  );
}
