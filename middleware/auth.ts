import { useCookie } from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("auth_token");

  //   console.log("token", token);
  if (!token.value) {
    return navigateTo("/sign-in");
  }
});
