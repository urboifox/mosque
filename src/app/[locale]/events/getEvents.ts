import { BASE_URL } from "@/constants";

export default async function getEvents(eventId?: string) {
  const res = await fetch(`${BASE_URL}/Event${eventId ? `/${eventId}` : ""}`);
  return res.json();
}
