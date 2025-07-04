<template lang="pug">
// lock icon with gradient stroke
svg.size-10(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="url(#grad1)")
  defs
    linearGradient#grad1(x1="0%" y1="0%" x2="100%" y2="0%")
      stop(offset="0%" stop-color="#4facfe")
      stop(offset="100%" stop-color="#00f2fe")
  path(
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
  )
</template>