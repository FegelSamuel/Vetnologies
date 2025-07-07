<template lang="pug">
section(class="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12")
  div(class="bg-white max-w-md w-full p-8 rounded-2xl shadow-lg")
    
    // Profile Image (optional)
    img(src="/assets/andyJonardi.jpg" alt="Profile Photo" class="w-24 h-24 rounded-full mx-auto mb-4")

    // Name & Title
    h2(class="text-2xl font-bold text-center text-gray-800") Andy Jonardi
    p(class="text-center text-gray-500 mb-6") Lead IT Consultant

    // Contact Info
    div(class="space-y-4 text-sm text-gray-700")
      div(class="flex items-center gap-2")
        Mail(class="w-5 h-5")
        a(href="mailto:andy@petit.net" class="hover:underline active:underline") andy@petit.net

      div(class="flex items-center gap-2")
        Phone(class="w-5 h-5")
        a(href="tel:5125853937" class="hover:underline active:underline") +1 (512) 585-3937

      div(class="flex items-center gap-2")
        svg(xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5 text-blue-700")
          path(d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761...")
        a(href="https://www.linkedin.com/in/andy-jonardi-6061598/" target="_blank" class="hover:underline active:underline") linkedin.com/in/andyj
</template>

<script setup lang="ts">
console.log("about page visited")
</script>