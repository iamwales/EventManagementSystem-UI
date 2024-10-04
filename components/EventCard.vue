<template>
  <div>
    <UCard class="">
      <div class="grid gap-2">
        <img
          src="https://images.unsplash.com/photo-1496436818536-e239445d3327?q=80&w=1200"
          alt="Event image"
          class="w-full h-48 object-cover mb-4 rounded-t-lg"
        />
        <p>{{ title }}</p>

        <UDivider label="Details" />

        <p>
          {{
            description.slice(0, 24) + (description.length > 24 ? "..." : "")
          }}
        </p>

        <div class="grid gap-2">
          <div class="flex gap-2 align-center">
            <UIcon name="i-heroicons-calendar" class="w-6 h-6" color="gray" />
            <p class="">Start Date: {{ formatDate(startDate) }}</p>
          </div>
          <div class="flex gap-2 align-center">
            <UIcon name="i-heroicons-calendar" class="w-6 h-6" color="gray" />
            <p class="">End Date: {{ formatDate(startDate) }}</p>
          </div>
        </div>
      </div>
      <template #footer>
        <NuxtLink :to="'events/' + uuid">
          <UButton class="w-full block text-center" size="xl">Details</UButton>
        </NuxtLink>
      </template>
    </UCard>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  uuid: {
    type: String,
    default: "",
    required: true,
  },
  title: {
    type: String,
    default: "Untitled Event",
  },
  description: {
    type: String,
    default: "",
  },
  startDate: {
    type: Date,
    default: "Not Set",
  },
  endDate: {
    type: Date,
    default: "Not Set",
  },
});

console.log("randomImage", generateRandomUrl());
</script>

<style></style>
