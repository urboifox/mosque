import { BASE_URL } from "@/constants";

export default async function getPrivateFiles(privateFileId?: string) {
  const res = await fetch(
    `${BASE_URL}/PrivateFile${privateFileId ? `/${privateFileId}` : ""}`
  );
  return res.json();
}
