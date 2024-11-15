import { getUser } from "@storage/user";
import { Path } from "./Path";
import { getToken } from "@storage/token";

export type AnimalProps = {
  _id?: string;
  petName?: string;
  petBirth?: Date;
  petGender?: "Fêmea" | "Macho";
  petPicture?: string;
  petObs?: string;
  petCharacteristics?: {
    petCastrated?: "Sim" | "Não";
    petBreed?: string;
    petSize?: string;
  };
  physicalCharacteristics?: {
    furColor?: "preta" | "branca" | "cinza" | "laranja" | "marrom" | "mesclada";
    furLength?: "curto" | "médio" | "longo";
    eyeColor?: "azul" | "castanho" | "verde";
    size?: number;
    weight?: number;
  };
  behavioralCharacteristics?: {
    personality?:
      | "amigável"
      | "reservado"
      | "brincalhão"
      | "independente"
      | "arisco";
    activityLevel?: "ativo" | "moderado" | "calmo";
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
};

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
