interface Props {
  title: string;
  subtitle: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-gray-900">
        {title}
      </h2>

      <p className="mt-4 text-xl text-gray-600">
        {subtitle}
      </p>
    </div>
  );
}