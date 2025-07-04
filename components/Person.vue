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
        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
    )
</template>