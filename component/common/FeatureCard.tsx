import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">

        <Icon
          className="text-orange-600"
          size={32}
        />

      </div>

      <h3 className="mt-6 text-2xl font-bold text-zinc-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-zinc-700">
        {description}
      </p>

    </div>
  );
}