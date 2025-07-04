<template lang="pug">
header(class="bg-cyan-600 h-8 flex flex-box text-amber-50 p-1")
  svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6")
    path(stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z")
  a(href="tel:3469074587") 346-907-4587
header(class="bg-white shadow-md w-full font-sans-serif")
  .container(class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")
    .inner(class="flex justify-between items-center h-16")
      
      //- Logo / Brand
      NuxtLink(to="/")
        img(src="/assets/gradient_no_name.png" class="h-14")

      //- Navigation Links (desktop only)
      nav(class="space-x-4 hidden md:flex")
        NuxtLink(to="/" class="text-gray-700 hover:text-cyan-500") Home
        NuxtLink(to="/about" class="text-gray-700 hover:text-cyan-500") About
        a(href="#" class="text-gray-700 hover:text-cyan-500") Services
        a(href="#" class="text-gray-700 hover:text-cyan-500") Contact

      //- Mobile Menu Button
      div(class="md:hidden lg:hidden")
        button(class="text-gray-700 focus:outline-none")
          svg(class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg")
            path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16")
NuxtPage
</template>

<script setup lang="ts">
console.log("reload happened")
</script>