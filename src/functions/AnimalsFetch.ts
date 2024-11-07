import { getUser } from "@storage/user";
import { Path } from "./Path";
import { getToken } from "@storage/token";

export const getAnimals = async () => {
  const company = await getUser();
  const token = await getToken();
  const result = await fetch(`${Path}/animal/select-all/${company.company}`, {
    method: "GET",
    headers: {
      authorization: token,
    },
  });

  const data = await result.json();
  return data;
};

export const getAnimal = async (id: string) => {
  const token = await getToken();
  const result = await fetch(`${Path}/animal/select-one/${id}`, {
    method: "GET",
    headers: {
      authorization: token,
    },
  });

  const data = await result.json();
  return data;
};
