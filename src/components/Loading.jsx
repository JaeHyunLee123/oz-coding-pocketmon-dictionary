const POCKETMON_IMAGE = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png`;

export default function Loading() {
  return (
    <div>
      <img
        src={POCKETMON_IMAGE}
        alt="loading pocketmon"
        className="animate-spin"
      />
      <span>Loading...</span>
    </div>
  );
}
