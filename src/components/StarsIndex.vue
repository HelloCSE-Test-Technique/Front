<template>
  <div class="stars">
    <h1 class="text-2xl mb-4">All Stars</h1>
    <div class="stars-grid">
      <div v-for="star in stars" :key="star.id" class="star-item">
        <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
          <div class="h-48 w-full">
            <img :src="`data:image/png;base64,${star.image}`" alt="plant"
              class="h-full w-full object-contain object-center" />
          </div>
          <div class="p-5">
            <p class="text-medium mb-3 text-gray-700"><span class="font-bold">First Name:</span> {{ star.firstname }}</p>
            <p class="text-medium mb-3 text-gray-700"><span class="font-bold">Last Name:</span> {{ star.lastname }}</p>
            <p class="text-medium mb-5 text-gray-700">{{ star.description }}</p>
            <button @click="showStar(star.id)"
              class="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">See
              More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.stars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: minmax(400px, auto);
  gap: 1rem;
}

@media (max-width: 768px) {
  .stars-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 576px) {
  .stars-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .star-item {
    margin-bottom: 1rem;
  }
}
</style>

<script>
import { ref, onMounted, computed } from 'vue';
import { useStarStore } from "@/stores/stars";
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const store = useStarStore();

    const stars = computed(() => {
      return store.stars;
    });

    onMounted(() => {
      store.fetchStars();
    });

    const showStar = (id) => {
      router.push({ path: `/${id}` });
    };

    return {
      stars,
      showStar,
    };
  },
};
</script>