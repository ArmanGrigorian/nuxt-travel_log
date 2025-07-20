import type { User } from "better-auth";

export type T_Location = {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  lat: number;
  long: number;
  userId: number;
  createdAt: number;
  updatedAt: number;
};

export type T_UserWithId = Omit<User, "id"> & {
  id: number;
};

declare module "h3" {
  interface H3EventContext {
    user?: T_UserWithId;
  }
}
