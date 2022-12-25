import { $instance } from ".";
import { IUser } from "../types/entities";

export type IUpdateUserData = Partial<IUser> & { id: number };

export class AuthApi {
  static async getLoginUser(payload: { password: string; login: string }) {
    const { data } = await $instance.get<IUser[]>("/users", { params: payload });
    return data[0];
  }

  static async updateAuthUser({ id, ...payload }: IUpdateUserData) {
    const { data } = await $instance.put<IUser>(`/users/${id}`, payload);
    return data;
  }
}
