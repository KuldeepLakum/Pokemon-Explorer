export const PokemonCards = ({ curPokeon }) => {
  return (
    <li className="pokemon-list">
      <figure>
        <img src={curPokeon.sprites.front_default} alt="" />
      </figure>
      <h1 className="pokemon-name">{curPokeon.name}</h1>
      <div className="pokemon-info">
        <span className="pok-type">
          {curPokeon.types.map((curType) => curType.type.name).join(", ")}
        </span>
      </div>
      <div>
        <p className="pokemon-info">
          <span>
            Height: <span className="pok-value">{curPokeon.height}</span>
          </span>
        </p>
        <p className="pokemon-info">
          <span>
            Weight: <span className="pok-value">{curPokeon.weight}</span>
          </span>
        </p>
        <p className="pokemon-info">
          <span>
            Speed:{" "}
            <span className="pok-value">{curPokeon.stats[5].base_stat}</span>
          </span>
        </p>
      </div>
      <div>
        <div className="pokemon-info">
          <p>
            Experience :
            <span className="pok-value">{curPokeon.base_experience}</span>
          </p>
          <span></span>
        </div>
        <div className="pokemon-info">
          <p>
            Attack:
            <span className="pok-value">{curPokeon.stats[1].base_stat}</span>
          </p>
          <span></span>
        </div>
        <div className="pokemon-info">
          <p>
            Ability:
            <span className="pok-value">
              {curPokeon.abilities
                .map((abilityInfo) => abilityInfo.ability.name)
                .slice(0, 1)
                .join(", ")}
            </span>
          </p>
        </div>
      </div>
    </li>
  );
};
