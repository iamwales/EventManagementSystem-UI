<template>
  <div>
    <AppHeader />

    <UContainer padding="2" class="">
      <div class="grid grid-cols-3 gap-4">
        <EventCard
          v-for="event in events"
          :key="event?.uuid"
          :title="event.name"
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

const events = useState("events");

console.log("events", events);

// console.log("myEvents", myEvents);
const getAllEvents = async () => {
  try {
    const getEvents = await GqlFindAllEvents();

    console.log("getEvents", getEvents);

    if (getEvents && getEvents.events) {
      console.log("I got here");
      events.value = getEvents.events || [];
    }
  } catch (error: any) {
    console.log("my error", error.statusCode);
    if (error.statusCode == 403) {
      // go to sign out
      navigateTo("/sign-in");
    }
  }
};

getAllEvents();
</script>

<style></style>
