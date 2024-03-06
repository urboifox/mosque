export default function OneFatwa({
  params: { fatwaId, locale },
}: {
  params: { fatwaId: string; locale: string };
}) {
  return (
    <section className="section">
      <div className="container">fatwa {fatwaId}</div>
    </section>
  );
}

// export async function generateStaticParams() {}
