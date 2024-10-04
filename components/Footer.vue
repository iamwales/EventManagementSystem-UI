<template>
  <UContainer class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex justify-between items-center">
      <div class="flex flex-col">
        <div class="flex justify-center gap-2">
          <UIcon name="bx:copyright" />
          <p>2024 Eventify. All rights reserved.</p>
        </div>
      </div>
      <div class="flex flex-col">
        <UHorizontalNavigation :links="links" />
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
const links = [
  {
    label: "Privacy Policy",
    href: "#",
  },
  {
    label: "Terms of Service",
    href: "#",
  },
];
</script>

<style></style>
