import { getNewsTypes } from "@/utils";

export default async function NewsWithTypes({
  params: { newsType },
}: {
  params: { newsType: string };
}) {
  // fetch news types and filter them by the param
  const newsTypes = await getNewsTypes();

  return <div>NewsWithTypes</div>;
}
