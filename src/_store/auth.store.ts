"use client";

import { StoreStateUtil } from "./utils/state.util";
import { TokenUtil } from "@/_shared/utils/token.util";
import { IUser, IUserProfile } from "@/_shared/interfaces/user.interface";
import { buildStoreProvider } from "./factories/provider.factory";
import { StoreConfig, buildStore } from "./factories/store.factory";

interface IState {
  userProfile: IUserProfile;
  accessToken: string;
}

interface IActions {
  reset: () => void;
  setUserProfile: (data: IUserProfile) => void;
  setAccessToken: (data: string) => void;
}

const initialState: IState = {
  accessToken: "",
  userProfile: {} as IUserProfile,
};

const config: StoreConfig<IState, IActions> = {
  name: "auth",
  storage: "local",
  initialState,
  actions: (set) => ({
    setAccessToken: (accessToken) => {
      set(() => ({ accessToken }));
      TokenUtil.setAccessToken(accessToken || "");
    },

    setUserProfile: (userProfile) => {
      set(() => ({ userProfile }));
      TokenUtil.setUserId(userProfile.id || "");
    },
    reset: () => {
      set(() => initialState);
      TokenUtil.setAccessToken("");
    },
  }),
};

interface IStoreData extends IState, IActions {}
const builder = buildStoreProvider<IStoreData>(() => buildStore(config));

export const authStore = builder.useStoreApi;
export const AuthStoreProvider = builder.StoreProvider;
export const authStoragedData = StoreStateUtil.getState<IState>(config);
