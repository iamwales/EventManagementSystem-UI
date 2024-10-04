<template>
  <div>
    <div class="md:flex min-h-full">
      <div
        class="hidden lg:flex md:flex-col justify-center flex-1 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-20 bg-black text-white"
      >
        <div
          class="mx-auto w-full max-w-[24rem] 2xl:max-w-[28rem] lg:w-[30rem] xl:w-[28rem]"
        >
          <div
            class="flex justify-center pt-20 min-h-[100vh] md:items-center md:pt-0"
          >
            <div class="w-full">
              <div>
                <NuxtLink to="/">
                  <img
                    class="mt-2"
                    src="/assets/logo/logo-white.svg"
                    alt="logo"
                    width="300"
                    height="80"
                  />
                </NuxtLink>
                <h1 class="mt-16 text-4xl font-medium text-white">Welcome</h1>
                <p class="text-[#EBF0F0] mt-6">Create an account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative flex-1 bg-[#FBFBFB]">
        <div
          class="flex justify-center pt-8 min-h-[100vh] items-center md:pt-0"
        >
          <div
            class="login-card w-full md:w-[32rem] xl:w-[36rem] px-8 py-8 md:px-20 md:py-16"
          >
            <div class="">
              <div class="flex items-center justify-center lg:hidden">
                <img
                  class="w-[10rem] mb-2"
                  src="/assets/logo/logo.svg"
                  alt="logo"
                />
              </div>
              <h2 class="text-center lg:text-left text-3xl text-black-soft">
                Sign Up
              </h2>

              <div class="mt-4">
                <UForm
                  :schema="schema"
                  :state="state"
                  class="space-y-4"
                  @submit="onSubmit"
                  :disabled="loading"
                >
                  <div class="grid grid-cols-2 gap-4">
                    <UFormGroup label="First Name" name="firstname">
                      <UInput v-model="state.firstname" size="xl" />
                    </UFormGroup>

                    <UFormGroup label="Last Name" name="lastname">
                      <UInput v-model="state.lastname" size="xl" />
                    </UFormGroup>
                  </div>
                  <UFormGroup label="Email" name="email">
                    <UInput v-model="state.email" size="xl" />
                  </UFormGroup>

                  <UFormGroup label="Password" name="password">
                    <UInput
                      v-model="state.password"
                      type="password"
                      size="xl"
                    />
                  </UFormGroup>

                  <UButton
                    type="submit"
                    size="xl"
                    class="w-full block text-center"
                    :loading="loading"
                  >
                    Submit
                  </UButton>
                </UForm>
              </div>
              <form class="mt-10">
                <div class="mt-9 text-center">
                  <p class="text-black-soft text-sm">
                    Already have an account?
                    <ULink class="underline underline-offset-2" to="/sign-in"
                      >Sign in</ULink
                    >
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="Toastify"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const schema = z.object({
  email: z.string().email("Please provide a valid email."),
  firstname: z.string("Please provide your first name."),
  lastname: z.string("Please provide your last name."),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
  firstname: undefined,
  lastname: undefined,
});

const loading = useState("loading", () => false);

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true;
  const signup = await GqlRegister(event.data);
  loading.value = false;

  if (signup && signup.register && signup.register.token) {
    console.log(signup.register.token);
    setToken(signup.register.token);

    const cookie = useCookie("auth_token");
    cookie.value = signup.register.token;

    navigateTo("/dashboard");
  } else {
    console.log("Error");
  }
}
</script>

<style>
.login-card {
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  border-color: rgb(245 245 245 / var(--tw-border-opacity));
  border-radius: 0.5rem;
  border-width: 1px;
  box-shadow: 0 3px 4px #c8c8c840;
}
</style>
