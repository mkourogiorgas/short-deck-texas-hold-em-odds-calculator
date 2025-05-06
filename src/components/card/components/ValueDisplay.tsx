const ValueDisplay = ({
  value,
  className,
}: {
  value: string;
  className: string;
}) => <div className={`text-[8px] ${className}`}>{value}</div>;

export default ValueDisplay;
