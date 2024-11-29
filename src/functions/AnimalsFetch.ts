import { getUser } from "@storage/user";
import { Path } from "./Path";
import { getToken } from "@storage/token";

export type AnimalProps = {
  _id?: string;
  petName?: string;
  petBirth?: Date;
  petGender?: "Fêmea" | "Macho" | string;
  petPicture?: string;
  petObs?: string;
  petCharacteristics?: {
    petCastrated?: "Sim" | "Não" | string;
    petBreed?: string;
    petSize?: string;
  };
  physicalCharacteristics?: {
    furColor?:
      | "preta"
      | "branca"
      | "cinza"
      | "laranja"
      | "marrom"
      | "mesclada"
      | string;
    furLength?: "curto" | "médio" | "longo" | string;
    eyeColor?: "azul" | "castanho" | "verde" | string;
    size?: number;
    weight?: number;
  };
  behavioralCharacteristics?: {
    personality?:
      | "amigável"
      | "reservado"
      | "brincalhão"
      | "independente"
      | "arisco"
      | string;
    activityLevel?: "ativo" | "moderado" | "calmo" | string;
    socialBehavior?: string;
    meow?: string;
  };
  petComorbidities?: string;
  company?: string;
  petStatus?: {
    petCurrentStatus: string; // ex: 0 Normal, 1 alerta,  2 grave
    petOccurrencesQuantity: number;
    petLastOccurrence: Date;
  };
  petVaccines: [] | string | any;
};

export const getAnimals = async () => {
  const company = await getUser();
  const token = await getToken();
  const result = await fetch(
    `${Path}/animal/select-all/${company.company}?limit=1000`,
    {
      method: "GET",
      headers: {
        authorization: token,
      },
    }
  );

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

export const postAnimal = async (formData: FormData) => {
  const token = await getToken();
  const result = await fetch(`${Path}/animal/create`, {
    method: "POST",
    headers: {
      authorization: token,
    },
    body: formData,
  });

  const response = await result.json();
  return response;
};

export const patchAnimal = async (id: string, body: AnimalProps) => {
  const token = await getToken();
  const result = await fetch(`${Path}/animal/update/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify(body),
  });

  const response = await result.json();
  return response;
};

export const uploadImage = async (body: FormData) => {
  const token = await getToken();
  const result = await fetch(`${Path}/upload-image`, {
    method: "POST",
    headers: {
      authorization: token,
    },
    body: body,
  });

  const response = await result.json();
  return response;
};

export const search = async (fields: string) => {
  const token = await getToken();
  const result = await fetch(`${Path}/animal/search`, {
    method: "POST",
    headers: {
      authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: fields, fields: ["petName"] }),
  });

  const response = await result.json();
  return response;
};
