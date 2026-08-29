interface BadgeProps {
  children: React.ReactNode;
  color?: "green" | "orange";
}

export default function Badge({
  children,
  color = "green",
}: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
        color === "green"
          ? "bg-green-100 text-green-700"
          : "bg-orange-100 text-orange-600"
      }`}
    >
      {children}
    </span>
  );
}