import { Path } from "./Path";

export const getUserData = async (token: string) => {
  const result = await fetch(`${Path}/`, {
    method: "GET",
    headers: {
      authorization: token,
    },
  });

  return result;
};
