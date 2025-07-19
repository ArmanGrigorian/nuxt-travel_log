import { createAuthClient } from "better-auth/vue";

const authClient = createAuthClient();

export const useAuthStore = defineStore("authStore", () => {
  const session = ref<Awaited<ReturnType<typeof authClient.useSession>> | null>(
    null,
  );

  async function init() {
    const response = await authClient.useSession(useFetch);
    session.value = response;
  }

  const user = computed(() => session.value?.data?.user);
  const error = computed(() => session.value?.error);
  const isLoading = computed(() => session.value?.isPending);

  async function signIn() {
    const { csrf } = useCsrf();
    const headers = new Headers();

    headers.append("csrf-token", csrf);

    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
      fetchOptions: {
        headers,
      },
    });
  }

  async function signOut() {
    const { csrf } = useCsrf();
    const headers = new Headers();

    headers.append("csrf-token", csrf);
    
    await authClient.signOut({
      fetchOptions: {
        headers,
      },
    });
  }

  return {
    init,
    user,
    error,
    isLoading,
    signIn,
    signOut,
  };
});
