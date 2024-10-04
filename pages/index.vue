<template>
  <div>
    <Header />

    <main>
      <section class="relative">
        <div class="container mx-auto px-4 py-24 relative z-10">
          <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="md:w-1/2 mb-8 md:mb-0">
              <h1 class="text-4xl md:text-5xl font-bold mb-4">
                Create Unforgettable Events
              </h1>
              <p class="text-xl mb-6">
                From intimate gatherings to grand galas, we bring your vision to
                life with expert planning and flawless execution.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <ULink to="/services" color="white" variant="solid" size="xl">
                  Get Started
                </ULink>
              </div>
            </div>
            <div class="md:w-1/2">
              <img
                src="/assets/landing-page/hero-section.svg"
                alt="Event collage"
                class="rounded-lg shadow-xl"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
        <div
          class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white dark:from-gray-900 h-16"
        ></div>
      </section>

      <UContainer class="py-16">
        <h2 class="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <UGrid cols="3" gap="4">
          <UCard v-for="feature in features" :key="feature.title">
            <template #header>
              <h3 class="text-xl font-semibold">{{ feature.title }}</h3>
            </template>
            <p>{{ feature.description }}</p>
          </UCard>
        </UGrid>
      </UContainer>
    </main>

    <Footer />
  </div>
</template>

<script lang="ts" setup>
const features = [
  {
    title: "Event Planning",
    description:
      "Comprehensive event planning services tailored to your needs.",
  },
  {
    title: "Venue Selection",
    description:
      "Find the perfect venue for your event with our expert assistance.",
  },
  {
    title: "On-site Management",
    description:
      "Professional on-site management to ensure your event runs smoothly.",
  },
];
</script>

<style></style>
