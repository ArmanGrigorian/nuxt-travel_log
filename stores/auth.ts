import { createAuthClient } from "better-auth/vue";

const authClient = createAuthClient();

export const useAuthStore = defineStore("authStore", () => {
  const session = authClient.useSession();
  
  const user = computed(() => session.value.data?.user);
  const error = computed(()=> session.value.error);
  const isLoading = computed(
    () => session.value.isPending || session.value.isRefetching,
  );

  async function signIn() {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });
  }

  async function signOut() {
    await authClient.signOut();
  }

  return {
    user,
    error,
    isLoading,
    signIn,
    signOut,
  };
});
