<template lang="pug">
div(class="sticky top-0 z-50")
    // Upper Header
    header(class="bg-cyan-600 h-8 flex items-center text-amber-50 px-4 w-full text-sm font-sans")
        svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 mr-2")
            path(stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z")
        a(href="tel:3469074587") 346-907-4587

    // Lower Header
    header(class="bg-zinc-50 shadow-md w-full font-sans")
        .container(class="max-w-7xl mx-auto sm:px-6 md:px-7 lg:px-8")
            .inner(class="flex justify-between items-center h-16")

                // Logo
                NuxtLink(to="/" class="flex items-center gap-2")
                    img(src="/assets/gradient_no_name.png" class="h-14")
                    h1(class="text-xl font-semibold text-gray-700 sm:hidden") Vetnologies
                    h1(class="text-xl font-semibold text-gray-700 hidden sm:inline") VETNOLOGIES

                // Desktop Navigation
                nav(class="space-x-4 hidden md:flex")
                    h2
                      NuxtLink(to="/" class="text-gray-700 hover:text-cyan-500") Home
                    h2
                      NuxtLink(to="/about" class="text-gray-700 hover:text-cyan-500") About
                    h2
                      NuxtLink(to="/services" class="text-gray-700 hover:text-cyan-500") Services
                    h2
                      NuxtLink(to="/contact" class="text-gray-700 hover:text-cyan-500") Contact Us
                      // the idea of the h1 here is to make the header buttons Tektur

                // Mobile Toggle Button
                button(@click="toggleMobileDropdown"
                       class="md:hidden text-gray-700 focus:outline-none transition-transform duration-300"
                       :class="{ 'rotate-180': showMobileDropdown }")
                    svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6")
                        path(fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd")

    // Mobile Dropdown
    Transition(name="fade-slide")
        div(v-if="showMobileDropdown" class="lg:hidden shadow-md bg-stone-50 font-sans px-6 py-4")
            div(class="flex flex-col gap-2 text-center")
              h2
                NuxtLink(to="/" class="text-gray-700 hover:text-cyan-500 active:bg-stone-200") Home
              h2
                NuxtLink(to="/about" class="text-gray-700 hover:text-cyan-500 active:bg-stone-200") About
              h2
                NuxtLink(to="/services" class="text-gray-700 hover:text-cyan-500 active:bg-stone-200") Services
              h2
                NuxtLink(to="/contact" class="text-gray-700 hover:text-cyan-500 active:bg-stone-200") Contact Us
NuxtPage
</template>

<script setup lang="js">

const showMobileDropdown = ref(false)

const toggleMobileDropdown = async() => {
  showMobileDropdown.value = !showMobileDropdown.value
  console.log(`toggle mobile dropdown to ${showMobileDropdown.value}`)
}

// Force all h1's to have Tektur fpnt
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Tektur'
    }
  ],
  style: [
    {
      children: `
        h1 {
          font-family: 'Tektur', sans;
          font-size: 48px;
          background: linear-gradient(to left, #09b123, #0090aa, #324aa3);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        h2 {
          font-family: 'Tektur', sans;
          font-size: 32px;
          background: linear-gradient(to left, #09b123, #0090aa, #324aa3);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      .fade-slide-enter-active,
      .fade-slide-leave-active {
          transition: all 0.3s ease-in-out;
      }
      .fade-slide-enter-from,
      .fade-slide-leave-to {
          opacity: 0;
          transform: translateY(-8px);
      }
      .fade-slide-enter-to,
      .fade-slide-leave-from {
          opacity: 1;
          transform: translateY(0);
      }
      `
    }
  ],
  meta: [{
    name: 'viewport', content: 'width=device-width, initial scale=1'
  }]
})
</script>