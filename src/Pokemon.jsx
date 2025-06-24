import { useEffect, useState } from "react";
import { PokemonCards } from "./PokemonCards";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearach] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=670";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      const pokemonDetail = data.results.map(async (curPokDetail) => {
        const res = await fetch(curPokDetail.url);
        const data = await res.json();
        return data;
      });
      console.log(pokemonDetail);
      const detailtResponse = await Promise.all(pokemonDetail);
      setPokemon(detailtResponse);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const serchData = pokemon.filter((curSerchPok) =>
    curSerchPok.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="lcontainer">
        <h1>Loading....</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className="econtainer">
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <section className="container">
      <header>
        <h1>Let's Catch Pokemon...</h1>
      </header>
      <div className="pokemon-search">
        <input
          type="text"
          placeholder="search-pokemon"
          value={search}
          onChange={(e) => setSearach(e.target.value)}
        />
      </div>
      <div className="card-container">
        <ul className="cards">
          {serchData.map((curPokeon) => {
            return <PokemonCards key={curPokeon.id} curPokeon={curPokeon} />;
          })}
        </ul>
      </div>
    </section>
  );
};
