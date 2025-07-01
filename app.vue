<template lang="pug">
header(class="bg-white shadow")
  div(class="container mx-auto flex items-center justify-between py-4 px-6")
    // Logo
    div(class="flex items-center space-x-2")
      img(src="/assets/gradient_no_name.png" class="size-auto")
      div(class="text-xl font-bold font-tektur") Vetnologies
slot
</template>

<script setup lang="ts">
console.log("reload happened")
</script>


<style lang="css">
.tektur-200 { 
  font-family: "Tektur", sans-serif;
  font-optical-sizing: auto;
  font-weight: auto;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
}
</style>