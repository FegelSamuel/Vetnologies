<template lang="pug">
svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="url(#grad1)" class="size-10")
    defs
        linearGradient#grad1(x1="0%" y1="0%" x2="100%" y2="0%")
            stop(offset="0%" stop-color="#09b123")
            stop(offset="50" stop-color="#0090aa")
            stop(offset="100%" stop-color="#324aa3")
    path(
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
    )
</template>