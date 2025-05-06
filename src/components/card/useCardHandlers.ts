import { DragEvent } from "react";
import { usePokerDispatch } from "../../store/hooks";
import { deckActions } from "../../store/deckSlice";
import { removeCardAsync, validateAsync } from "../../store/asyncActions";

export const useCardHandlers = (index: number) => {
  const dispatch = usePokerDispatch();

  const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text/plain", index.toString());
  };

  const handleClick = async () => {
    dispatch(deckActions.updateDeck({ cardIndex: index, isSelected: false }));
    await dispatch(removeCardAsync({ cardIndex: index }));
    await dispatch(validateAsync());
  };

  return { handleDragStart, handleClick };
};
