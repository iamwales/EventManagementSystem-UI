<template>
  <div>
    <header class="my-6">
      <nav class="container mx-auto px-8 sm:px-12 lg:px-24">
        <div class="flex items-center justify-between">
          <div class="flex items-center items-center space-x-4">
            <div class="flex-shrink-0">
              <!-- <USelect
                :options="['Current User Name']"
                modelValue="Current User Name"
                class="w-user-profile"
              >
                <template #trailing>
                  <UIcon name="i-heroicons-chevron-up-down" class="w-5 h-5" />
                </template>
              </USelect> -->
              <img width="120" height="40" src="/assets/logo/logo.svg" />
            </div>
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
          </div>
          <div class="flex items-center space-x-4">
            <UInput
              icon="i-heroicons-magnifying-glass-20-solid"
              size="sm"
              color="white"
              :trailing="false"
              placeholder="Search..."
              class="header-search"
            />
            <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
              <UChip size="2xl">
                <UButton icon="i-heroicons-user" color="gray" />
              </UChip>
            </UDropdown>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script lang="ts" setup>
const menuItems = [
  { name: "Events", path: "/dashboard" },
  { name: "My Events", path: "/my-events" },
  // { name: "Contact", path: "/contact" },
];

const items = [
  [
    {
      label: "My Profile",
      icon: "i-heroicons-user",
    },
  ],
  [
    {
      label: "Logout",
      icon: "i-heroicons-power",
      click: () => {
        clearToken();

        navigateTo("/");
      },
    },
  ],
];
</script>

<style>
.my-6 {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.w-user-profile {
  width: 12rem;
}

.header-search {
  width: 18rem;
}
</style>
