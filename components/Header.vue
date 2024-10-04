<template>
  <header class="border-b border-gray-200 dark:border-gray-700">
    <nav class="container mx-auto px-8 sm:px-12 lg:px-24">
      <div class="flex items-center justify-between h-16">
        <!-- Website Name -->
        <div class="flex-shrink-0">
          <NuxtLink
            to="/"
            class="text-xl font-bold text-gray-800 dark:text-white"
          >
            <img
              src="/assets/logo/logo.svg"
              alt="Event Management System Logo"
              class=""
              width="160"
              height="40"
            />
          </NuxtLink>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:block">
          <ul class="flex space-x-4">
            <li v-for="item in menuItems" :key="item.path">
              <NuxtLink
                :to="item.path"
                class="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Authentication Buttons -->
        <div class="hidden md:flex items-center">
          <NuxtLink to="/sign-in">
            <UButton color="primary" variant="solid" class="mr-2"
              >Sign In</UButton
            >
          </NuxtLink>
          <NuxtLink to="/sign-up">
            <UButton color="gray" variant="outline">Sign Up</UButton></NuxtLink
          >
          <UButton
            class="items-center"
            :icon="
              isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
            "
            color="gray"
            variant="ghost"
            aria-label="Toggle Dark Mode"
            @click="isDark = !isDark"
          />
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <UButton
            icon="i-heroicons-bars-3"
            color="gray"
            variant="ghost"
            aria-label="Menu"
            @click="toggleMenu"
          />
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div v-if="isMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NuxtLink
              v-for="item in menuItems"
              :key="item.path"
              :to="item.path"
              class="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              @click="closeMenu"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
          <div class="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <UButton color="primary" variant="solid" class="w-full mb-2"
              >Sign In</UButton
            >
            <UButton color="gray" variant="outline" class="w-full"
              >Sign Up</UButton
            >
            <UButton
              class="items-center"
              :icon="
                isDark
                  ? 'i-heroicons-moon-20-solid'
                  : 'i-heroicons-sun-20-solid'
              "
              color="gray"
              variant="ghost"
              aria-label="Toggle Dark Mode"
              @click="isDark = !isDark"
            />
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

const menuItems = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// Close menu when route changes
const route = useRoute();
watch(() => route.fullPath, closeMenu);
</script>

<style></style>
