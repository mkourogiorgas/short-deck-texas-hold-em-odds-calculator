const RED_BORDER = "border-2 border-red-600";

const GREEN_BORDER = "border-2 border-green-600";

export const getBorderStyles = (isHovered: boolean, isValid: boolean) => ({
  border: isHovered ? GREEN_BORDER : !isValid ? RED_BORDER : "",
});
