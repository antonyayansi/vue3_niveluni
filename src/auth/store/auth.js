import { defineStore } from "pinia";
import { baseApi } from "../../services/baseApi";
import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(import.meta.env.VITE_JWT_SECRET);

export const auth = defineStore("auth", {
  state: () => ({
    isLoading: false,
    openAuthModal: false,
    user: null,
    isAuthenticated: false,
    error: null,
  }),
  actions: {
    async onLogin(user) {
      this.isLoading = true;
      try {
        const { data } = await baseApi.post("/auth/login", user);
        localStorage.setItem("v-t", data.access_token);

        const jwt = await new SignJWT(data.user)
          .setProtectedHeader({ alg: "HS256" })
          .sign(secret);

        localStorage.setItem("v-u", jwt);
        window.location.reload();
      } catch (e) {
        this.error =
          e.response?.data?.message || "Usuario o contraseña incorrectos";
      } finally {
        this.isLoading = false;
      }
    },
    async onLoginWithGoogle() {
      const urlRedirect = `${import.meta.env.VITE_BASE_URL}/auth/google`;
      window.location.href = urlRedirect;
    },
    async onLoginCallback(token = null, user = null) {
      localStorage.setItem("v-t", token);

      const jwt = await new SignJWT(user)
        .setProtectedHeader({ alg: "HS256" })
        .sign(secret);

      localStorage.setItem("v-u", jwt);
      //redirect to home
      window.location.href = "/";
    },
    async checkAuth() {
      const jwt = localStorage.getItem("v-u");
      if (!jwt) return false;
      try {
        const { payload } = await jwtVerify(jwt, secret);
        this.user = payload;
        this.isAuthenticated = true;
        return true;
      } catch (e) {
        console.error("JWT verification failed:", e);
        return false;
      }
    },
    async logout() {
      this.isLoading = true;
      try {
        const { data } = await baseApi.post("/auth/logout");
        localStorage.removeItem("v-t");
        localStorage.removeItem("v-u");
        this.user = null;
        this.isAuthenticated = false;
        window.location.reload();
      } catch (e) {
        console.log(e);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
