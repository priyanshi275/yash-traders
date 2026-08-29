interface Props {
  title: string;
  subtitle: string;
  center?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  center = true,
}: Props) {
  return (
    <div
      className={`mb-16 ${
        center ? "text-center" : ""
      }`}
    >
      <span className="inline-flex items-center rounded-full bg-orange-100 border border-orange-200 px-5 py-2 text-sm font-semibold text-orange-700">
        Yash Traders
      </span>

      <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight">
        {title}
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-lg leading-8 text-zinc-700">
        {subtitle}
      </p>
    </div>
  );
}