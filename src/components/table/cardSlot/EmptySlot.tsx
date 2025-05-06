import { usePokerSelector } from "../../../store/hooks";
import useEmptySlotHandlers from "./useEmptySlotHandlers";
import cardSlot from "../../../assets/cardSlot.png";
import { getBorderStyles } from "./styles";

interface EmptyCardSlotProps {
  position: string;
  slotIndex: number;
}

const EmptyCardSlot = ({ position, slotIndex }: EmptyCardSlotProps) => {
  const validation = usePokerSelector((state) => state.validation);
  const { isHovered, handleDrop, handleLeave, handleOver } =
    useEmptySlotHandlers({
      position,
      slotIndex,
    });

  const isValid = validation[position][slotIndex];
  const { border } = getBorderStyles(isHovered, isValid);

  return (
    <div onDrop={handleDrop} onDragLeave={handleLeave} onDragOver={handleOver}>
      <img
        className={`${border} min-w-9 rounded-sm`}
        src={cardSlot}
        alt="EmptyCardSlot"
      />
    </div>
  );
};

export default EmptyCardSlot;
