const RemoveOverlay = ({
  onClick,
  hover,
  text,
}: {
  onClick: () => void;
  hover: string;
  text: string;
}) => (
  <div
    onClick={onClick}
    className={`hidden absolute inset-0 items-center justify-center bg-black/70 text-lg cursor-pointer rounded-sm ${hover} ${text}`}
  >
    X
  </div>
);

export default RemoveOverlay;
