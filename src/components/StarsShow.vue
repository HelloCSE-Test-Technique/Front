<template>
    <div class="antialiased">
      <div class="py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:w-1/2 px-4">
              <img :src="`data:image/png;base64,${stars.image}`" alt="star" class="h-full w-full object-contain object- max-h-80">
            </div>
            <div class="md:w-1/2 px-4 py-2 md:py-0">
              <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{{ stars.firstname }} {{ stars.lastname }}</h2>
              <p class="text-gray-500">Description : {{ stars.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<style>
  @media (min-width: 768px) {
    .max-h-80 {
      max-height: 80%;
    }
  }
</style>

<script>
import { ref, onMounted, computed } from 'vue';
import { useStarStore } from "@/stores/stars";
import { useRoute } from 'vue-router'

export default {
    setup() {
        const route = useRoute()

        const store = useStarStore();

        const stars = computed(() => {
            return store.stars;
        });

        onMounted(() => {
            store.fetchStar(route.params.id);
        });

        return {
            stars,
        };
    },
};
</script>