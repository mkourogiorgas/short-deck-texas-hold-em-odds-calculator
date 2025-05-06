import CardSlot from "../cardSlot";
import PlayerName from "./PlayerName";
import { Hand } from "../../../types";

interface PlayerProps {
  player: Hand;
  position: string;
}

const Player = ({ player, position }: PlayerProps) => {
  return (
    <div className="flex-col">
      <div className="flex flex-row m-2">
        {player.map((card, index) => (
          <CardSlot
            key={index}
            position={position}
            slotIndex={index}
            cardIndex={card.index}
          />
        ))}
      </div>
      <PlayerName position={position} />
    </div>
  );
};

export default Player;
