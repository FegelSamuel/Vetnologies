<template lang="pug">
div(class="p-4 lg:p-16 mb-8")
    // ABOUT US section
    div(class="flex flex-col lg:flex-row items-center gap-6 w-full")
        img(src="/assets/genericITPicture.jpg" class="w-full max-w-xs lg:max-w-none lg:h-128 lg:mr-32")
        h1(class="text-2xl lg:text-4xl font-tektur ml-0 lg:ml-16 mt-4 lg:mt-8 text-center lg:text-left")
            | ABOUT US
            div(class="text-base lg:text-xl font-sans text-black font-normal mt-2 text-center lg:text-left")
                | Vetnology started in 2002, by an Electrical Engineer who was highly motivated to help veterinary practices enter the world of digital information and technology.

    // Second section
    div(class="flex flex-col lg:flex-row items-center gap-6 w-full mt-16")
        div(class="text-base lg:text-xl font-sans text-center lg:text-left max-w-xl lg:ml-16")
            | At Vetnology, we are passionate about providing reliable, tailored IT solutions for small businesses and individuals. With 20+ years of experience in the technology sector, our team specializes in network setup, troubleshooting, cybersecurity, and remote support to keep your digital operations running smoothly.
        img(src="/assets/genericCorpo.jpg" class="w-full max-w-xs lg:max-w-none lg:h-128 lg:mr-32")

    // Third section
    div(class="flex flex-col lg:flex-row items-center gap-6 w-full mt-16")
        img(src="/assets/guyTalking.png" class="w-full max-w-xs lg:max-w-none lg:h-128 lg:mr-32")
        div(class="text-base lg:text-xl font-sans text-center lg:text-left max-w-xl lg:ml-16")
            | We believe in building lasting relationships with our clients by offering honest advice, prompt service, and clear communication. Whether you need help sharing your laptop’s network interface with a hotspot, setting up internet connection sharing through LAN, or configuring advanced solutions like VPN servers on devices such as the UniFi Cloud Gateway Ultra, we’re here to make technology work for you.

    // Fourth section
    div(class="flex flex-col lg:flex-row items-center gap-6 w-full mt-16")
        div(class="text-base lg:text-xl font-sans text-center lg:text-left max-w-xl lg:ml-16")
            | Our mission is to empower clients by simplifying complex IT challenges and delivering solutions that fit your unique needs. Let us help you stay connected, secure, and productive in today’s fast-paced digital world.
        img(src="/assets/black_no_name.png" class="w-full max-w-xs lg:max-w-none lg:h-128 lg:mr-32")
</template>

<script setup lang="ts">
console.log("about page visited")
</script>
