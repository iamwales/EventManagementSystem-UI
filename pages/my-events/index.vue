<template>
  <div>
    <AppHeader />

    <UModal v-model="isOpen" prevent-close>
      <UCard
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-xl font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Create Event
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpen = false"
            />
          </div>
        </template>

        <UForm
          :schema="schema"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
          :disabled="loading"
          :loading="loading"
        >
          <UFormGroup label="Title" name="name">
            <UInput v-model="state.name" size="xl" />
          </UFormGroup>

          <UDivider />

          <!-- <template #footer> -->
          <UButton
            type="submit"
            size="xl"
            class="w-full block text-center"
            label="Create"
          />
          <!-- </template> -->
        </UForm>
      </UCard>
    </UModal>

    <UContainer padding="2" class="">
      <div class="flex justify-end mt-8">
        <UButton @click="isOpen = true" size="xl">Create Event</UButton>
      </div>
      <div class="grid grid-cols-3 gap-4 mt-4">
        <EventCard
          v-for="event in events"
          :key="event?.uuid"
          :title="event.title"
          :uuid="event.uuid"
          :description="event.description"
          :start-date="event.startDate"
          :end-date="event.endDate"
        />
      </div>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const form = ref();

const schema = z.object({
  name: z
    .string({ required_error: "Please provide event title" })
    .min(3, "Event title should be more than 3 letters")
    .max(30, "Event title should be less than 30 letters"),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  name: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data);
  const newEvent = await GqlCreateEventStart(event.data);

  if (newEvent && newEvent.createEventStart && newEvent.createEventStart.uuid) {
    // route to edit page
    navigateTo(`/my-events/${newEvent.createEventStart.uuid}/edit`);
  }
}

const isOpen = ref(false);

const events = [
  {
    uuid: "test",
    title: "Events",
    description: "Lorem islum",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    uuid: "test-1",
    title: "Events",
    description: "Lorem islum",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    uuid: "test-2",
    title: "Events",
    description: "Lorem islum",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    uuid: "test-3",
    title: "Events",
    description: "Lorem islum",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    uuid: "test-4",
    title: "Events",
    description: "Lorem islum",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    uuid: "test-5",
    title: "Events",
    description: "Lorem islum",
    startDate: new Date(),
    endDate: new Date(),
  },
];
</script>

<style></style>
