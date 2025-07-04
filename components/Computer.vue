<template lang="pug">
svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="url(#grad1)" class="size-6")
  defs
    linearGradient#grad1(x1="0%" y1="0%" x2="100%" y2="0%")
      stop(offset="0%" stop-color="#4facfe")
      stop(offset="100%" stop-color="#00f2fe")
  path(
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
  )
</template>