import { Path } from "./Path";
import { getToken } from "@storage/token";

export const getAllAnimalsByGender = async () => {
  const token = await getToken();
  const result = await fetch(`${Path}/animal/charts/total-animals`, {
    method: "GET",
    headers: {
      authorization: token,
    },
  });

  const response = await result.json();
  return response;
};

export const getSickAnimals = async () => {
  const token = await getToken();
  const result = await fetch(`${Path}/animal/charts/sick-animals`, {
    method: "GET",
    headers: {
      authorization: token,
    },
  });

  const response = await result.json();
  return response;
};

export const getAllActivities = async () => {
  const token = await getToken();
  const result = await fetch(
    `${Path}/activity/charts/average-animal-activity/all`,
    {
      method: "GET",
      headers: {
        authorization: token,
      },
    }
  );

  const response = await result.json();
  return response.result.gatos;
};
