interface Props {
  title: string;
  description: string;
}

export default function EmptyState({
  title,
  description,
}: Props) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-16 text-center shadow-sm">

      <h2 className="text-4xl font-bold text-zinc-900">
        {title}
      </h2>

      <p className="mt-4 text-lg leading-8 text-zinc-700">
        {description}
      </p>

    </div>
  );
}