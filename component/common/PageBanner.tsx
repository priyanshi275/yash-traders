interface Props {
  title: string;
  subtitle: string;
}

export default function PageBanner({
  title,
  subtitle,
}: Props) {
  return (
    <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <h1 className="text-5xl font-extrabold">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-orange-100">
          {subtitle}
        </p>

      </div>

    </section>
  );
}