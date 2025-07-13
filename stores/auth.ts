import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient();

export const useAuthStore = defineStore("authStore", () => {
  const isLoading = ref(false);

  async function signIn() {
    isLoading.value = true;

    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });

    isLoading.value = false;
  }

  async function signOut() {
    isLoading.value = true;

    await authClient.signOut();

    isLoading.value = false;
  }

  return {
    isLoading,
    signIn,
    signOut,
  };
});
