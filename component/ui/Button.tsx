import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition duration-300 ${
        variant === "primary"
          ? "bg-orange-500 text-white hover:bg-orange-600"
          : "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}