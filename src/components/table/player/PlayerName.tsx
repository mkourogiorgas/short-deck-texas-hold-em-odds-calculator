import C from "./constants";

const PlayerName = ({ position }: { position: string }) => (
  <p className="text-ts text-white text-center font-sans font-medium">
    {C.PLAYER_NAME[position]}
  </p>
);

export default PlayerName;
