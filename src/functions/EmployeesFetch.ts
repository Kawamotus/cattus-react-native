import { getToken } from "@storage/token";
import { Path } from "./Path";
import { getUser } from "@storage/user";

export const getEmployees = async () => {
  const token = await getToken();
  const user = await getUser();

  const result = await fetch(`${Path}/employee/select-all/${user.company}`, {
    method: "GET",
    headers: {
      authorization: token,
    },
  });

  const data = await result.json();
  return data;
};
