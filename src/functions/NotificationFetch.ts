import { getUser } from "@storage/user";
import { Path } from "./Path";
import { getToken } from "@storage/token";

export const getNotifications = async () => {
  const token = await getToken();
  const user = await getUser();
  const result = await fetch(
    `${Path}/notification/select-all/${user.company}`,
    {
      method: "GET",
      headers: {
        authorization: token,
      },
    }
  );

  const response = await result.json();
  return response;
};
