<script setup lang="ts">
const search = ref("");
const input = ref("");

interface ApiBody {
  name: string;
  main: string;
  weather: string;
  icon: string;
  temp: number;
  


}

const { data: city, error } = await useFetch<ApiBody>(
  () =>
    `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=d33bbaa1aa7e53deb802f37ed55aa755&units=metric&lang=sp,es `
);

const handleClick = () => {
  const formatedSearch = input.value.trim().split(" ").join("+");
  search.value = formatedSearch;
  input.value = "";
};
</script>

<template>
  <div class="h-screen relative overflow-hidden">
    <img />
    <div class="absolute w-full h-full top-0 bg-slate-400" />
    <div class="absolute w-full h-full top-9 p-48">
      <div class="flex justify-between">
        <div>
          <h1 class="text-7xl text-white">{{ city.name }}</h1>
          <p class="font-extraligth text-2xl mt-2 text-white">Fecha</p>
          <img
            :src="`https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`"
            class="w-56 mt-2"
          />
        </div>
        <div>
          <p class="text-9xl text-white font-extralight">
            {{ city.main.temp }}º
          </p>
        </div>
      </div>
      <div class="mt-20">
        <input
          type="text"
          class="w-1/2 h-10"
          placeholder="Buscar ciudad..."
          v-model="input"
        />
        <button
          class="bg-sky-400 hover:bg-sky-700 w-20 text-white h-10"
          @click="handleClick"
        >
          Buscar
        </button>
      </div>
    </div>
  </div>
</template>
