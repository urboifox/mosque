"use server";

import { BASE_URL } from "./constants";

export async function requestEgaza(formData: FormData) {
  let obj: any = {};

  formData.forEach((val, key) => {
    obj[key] = val;
  });
  const res = await fetch(
    `${BASE_URL}/EgazaRequest?Id=${obj.id}&Name=${obj.name}&Phone1=${obj.phone1}&Phone2=${obj.phone2}&Email=${obj.email}&Age=${obj.age}&Gender=${obj.gender}&EgazaShiekhId=${obj.egazaShiekhId}&EgazaSubcategoryId=${obj.egazaSubcategoryId}&Notes=${obj.notes}`,
    {
      method: "POST",
    }
  );

  const response = await res.json();
  console.log(response);
  return response;
}

export async function requestFood(formData: FormData) {
  let obj: any = {};

  formData.forEach((val, key) => {
    obj[key] = val;
  });
  const res = await fetch(
    `${BASE_URL}/FoodNeed?Name=${obj.name}&Phone1=${obj.phone1}&Phone2=${obj.phone2}&Address=${obj.address}&Notes=${obj.notes}`,
    {
      method: "POST",
    }
  );

  const response = await res.json();
  console.log(response);
  return response;
}
