import { useCardHandlers } from "./useCardHandlers";
import { RemoveOverlay, SuitDisplay, ValueDisplay } from "./components";
import { Card as CardProps } from "../../types";
import { getCardStyles } from "./styles";

const Card = ({ suit, value, index, isSelected, isInTable }: CardProps) => {
  const { handleDragStart, handleClick } = useCardHandlers(index);
  const { background, hover, opacity, symbol, text } = getCardStyles(
    suit,
    isSelected,
    isInTable
  );

  return (
    <div
      id={index.toString()}
      draggable={!isSelected && !isInTable}
      onDragStart={handleDragStart}
      className={`group relative w-9.75 h-13 flex flex-col px-0.5 border-2 border-white text-white rounded-sm skew-x-0
          ${background} ${opacity} ${text}`}
    >
      <ValueDisplay value={value} className="text-left" />
      <SuitDisplay symbol={symbol} />
      <ValueDisplay value={value} className="rotate-180" />
      <RemoveOverlay onClick={handleClick} hover={hover} text={text} />
    </div>
  );
};

export default Card;
