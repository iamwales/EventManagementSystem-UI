<template>
  <div>
    <AppHeader />

    <UContainer padding="2" class="">
      <div class="grid grid-cols-3 gap-4">
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
definePageMeta({
  middleware: "auth",
});

const myEvents = GqlFindAllEvents();

// console.log("myEvents", myEvents);

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
