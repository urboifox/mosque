"use server";

import { BASE_URL } from "./constants";

export async function requestEgaza(formData: FormData) {
  console.log(formData);
  const res = await fetch(`${BASE_URL}/EgazaRequest`, {
    method: "POST",
    body: formData,
  });

  const response = await res.json();
  console.log(response);
  return response;
}
