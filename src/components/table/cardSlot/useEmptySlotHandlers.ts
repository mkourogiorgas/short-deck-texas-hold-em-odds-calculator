import { DragEvent, useState } from "react";
import { deckActions } from "../../../store/deckSlice";
import { usePokerDispatch, usePokerSelector } from "../../../store/hooks";
import { updateTableAsync, validateAsync } from "../../../store/asyncActions";

interface EmptyCardSlotProps {
  position: string;
  slotIndex: number;
}

const useEmptySlotHandlers = ({ position, slotIndex }: EmptyCardSlotProps) => {
  const deck = usePokerSelector((state) => state.deck);
  const dispatch = usePokerDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleDrop = async (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const cardIndex = +event.dataTransfer.getData("text/plain");
    const card = deck[cardIndex];
    const isSelected = true;
    dispatch(deckActions.updateDeck({ cardIndex, isSelected }));
    await dispatch(updateTableAsync({ position, slotIndex, card }));
    await dispatch(validateAsync());
  };

  const handleLeave = (event: DragEvent<HTMLDivElement>) => {
    setIsHovered(false);
    event.preventDefault();
  };

  const handleOver = (event: DragEvent<HTMLDivElement>) => {
    setIsHovered(true);
    event.preventDefault();
  };

  return {
    isHovered,
    handleDrop,
    handleLeave,
    handleOver,
  };
};

export default useEmptySlotHandlers;
