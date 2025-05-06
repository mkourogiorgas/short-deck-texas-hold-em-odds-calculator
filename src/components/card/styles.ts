export interface SuitToColor {
  [key: string]: string;
}

const BG_COLOR: SuitToColor = {
  hearts: "bg-[#731C16]",
  spades: "bg-[#393939]",
  clubs: "bg-[#007c7b]",
  diamonds: "bg-[#004e61]",
};

const SUIT_SYMBOL: SuitToColor = {
  hearts: "after:content-['♥']",
  spades: "after:content-['♠']",
  clubs: "after:content-['♣']",
  diamonds: "after:content-['♦']",
};

const TEXT_COLOR: SuitToColor = {
  hearts: "text-red-600",
  spades: "text-white",
  clubs: "text-green-500",
  diamonds: "text-[#009ef6]",
};

const HOVER: string = "group-hover:flex group-hover:flex-col";

const OPACITY: string = "opacity-30";
const NO_OPACITY: string = "opacity-100";

export const getCardStyles = (
  suit: string,
  isSelected: boolean,
  isInTable?: boolean
) => ({
  background: BG_COLOR[suit],
  hover: isInTable ? HOVER : "",
  opacity: isSelected ? OPACITY : NO_OPACITY,
  symbol: SUIT_SYMBOL[suit],
  text: TEXT_COLOR[suit],
});
