"use client";

import { Timestamp } from "firebase/firestore";
import { authStore } from "@/_store/auth.store";
import { loadingStore } from "@/_store/loading.store";
import React, { createContext, useContext } from "react";
import { AuthService } from "@/app/auth/_services/auth.service";
import { UserService } from "../firebase/services/user.service";
import { IUserRegister } from "@/_shared/interfaces/user.interface";

interface IAuthContext {
  signOut: () => void;
  signUp: (data: IUserRegister) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
}

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext>({
  signIn: () => new Promise<void>(() => {}),
  signUp: () => new Promise<void>(() => {}),
  signOut: () => {},
});

const _userService = new UserService();

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const _authStore = authStore((state) => state);
  const _loadingStore = loadingStore((state) => state);

  const signIn = async (email: string, password: string) => {
    try {
      _loadingStore.setShow(true);

      const { data: response } = await AuthService.signIn({
        email,
        password,
      });

      _authStore.setAccessToken(response.data.token);
      _authStore.setUserProfile(response.data.user);

      _loadingStore.setShow(false);
    } catch (error) {
      _loadingStore.setShow(false);
      throw error;
    }
  };

  const signUp = async (data: IUserRegister) => {
    try {
      _loadingStore.setShow(true);

      const response = await _userService.signUp({
        ...data,
        uid: "",
        creationDate: Timestamp.now(),
      });

      console.log(response);

      _loadingStore.setShow(false);
    } catch (error) {
      _loadingStore.setShow(false);
      throw error;
    }
  };

  const signOut = () => {};

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("useAuth must be used within a provider");

  return context;
};
