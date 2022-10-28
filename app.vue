<template>
  <div class="h-screen relative overflow-hidden">
    <img />
    <div class="absolute w-full h-full top-0 bg-slate-400" />
    <div class="absolute w-full h-full top-9 p-48">
      <div class="flex justify-between">
        <div>
          <h1 class="text-7xl text-white">Tarragona</h1>
          <p class="font-extraligth text-2xl mt-2 text-white">Fecha</p>
          <img class="w-56" />
        </div>
        <div>
          <p class="text-9xl text-white font-extralight">23º</p>
        </div>
      </div>
      <div class="mt-20">
        <input type="text" class="w-1/2 h-10" placeholder="Buscar ciudad..." />
        <button class="bg-sky-400 hover:bg-sky-700 w-20 text-white h-10">
          Buscar
        </button>
      </div>
    </div>
  </div>
</template>
