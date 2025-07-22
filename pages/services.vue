<template lang="pug">
div(class="space-y-4 p-6 text-black")

  // Network Setup and Management
  details(class="bg-white rounded-xl shadow-md p-4 group open:shadow-lg transition-all duration-300")
    summary(class="cursor-pointer text-lg font-bold flex items-center justify-between")
      span.flex.items-center.gap-2
        Wifi(class="w-10 h-10 text-vetnolBlue")
        h2 Network Setup and Management
      span(class="text-gray-500 group-open:rotate-180 transition-transform") ▼
    p(class="mt-2 text-sm leading-relaxed font-sans")
      | LAN/WAN design and implementation, network monitoring, performance tuning, and secure protocols like firewalls and VPNs.

  // Cybersecurity Services
  details(class="bg-white rounded-xl shadow-md p-4 group open:shadow-lg transition-all duration-300")
    summary(class="cursor-pointer text-lg font-bold flex items-center justify-between")
      span.flex.items-center.gap-2
        Lock(class="w-10 h-10 text-vetnolBlue")
        h2 Cybersecurity Services
      span(class="text-gray-500 group-open:rotate-180 transition-transform") ▼
    p(class="mt-2 text-sm leading-relaxed")
      | Antivirus, firewall management, intrusion detection, and full-scale security audits.
      
  // IT Help Desk and Technical Support
  details(class="bg-white rounded-xl shadow-md p-4 group open:shadow-lg transition-all duration-300")
    summary(class="cursor-pointer text-lg font-bold flex items-center justify-between")
      span.flex.items-center.gap-2
        Phone(class="w-10 h-10 text-vetnolBlue")
        h2 IT Help Desk and Technical Support
      span(class="text-gray-500 group-open:rotate-180 transition-transform") ▼
    p(class="mt-2 text-sm leading-relaxed")
      | Remote and on-site support, hardware/software troubleshooting, and responsive issue resolution.

  // Managed IT Services
  details(class="bg-white rounded-xl shadow-md p-4 group open:shadow-lg transition-all duration-300")
    summary(class="cursor-pointer text-lg font-bold flex items-center justify-between")
      span.flex.items-center.gap-2
        Shield(class="w-10 h-10 text-vetnolBlue")
        h2 Managed IT Services
      span(class="text-gray-500 group-open:rotate-180 transition-transform") ▼
    p(class="mt-2 text-sm leading-relaxed")
      | Proactive monitoring, patching, backup, and long-term tech maintenance plans.

  // Cloud Services
  details(class="bg-white rounded-xl shadow-md p-4 group open:shadow-lg transition-all duration-300")
    summary(class="cursor-pointer text-lg font-bold flex items-center justify-between")
      span.flex.items-center.gap-2
        CloudUp(class="w-10 h-10 text-vetnolBlue")
        h2 Cloud Services
      span(class="text-gray-500 group-open:rotate-180 transition-transform") ▼
    p(class="mt-2 text-sm leading-relaxed")
      | Cloud storage, app hosting, migration to Azure/AWS/Google Cloud, and secure sharing solutions.

  // Hardware and Software Solutions
  details(class="bg-white rounded-xl shadow-md p-4 group open:shadow-lg transition-all duration-300")
    summary(class="cursor-pointer text-lg font-bold flex items-center justify-between")
      span.flex.items-center.gap-2
        LightBulb(class="w-10 h-10 text-vetnolBlue")
        h2 Hardware and Software Solutions
      span(class="text-gray-500 group-open:rotate-180 transition-transform") ▼
    p(class="mt-2 text-sm leading-relaxed")
      | Setup and maintenance for desktops, laptops, servers, mobile device support, and software rollouts.

  // Data Backup and Recovery
  details(class="bg-white rounded-xl shadow-md p-4 group open:shadow-lg transition-all duration-300")
    summary(class="cursor-pointer text-lg font-bold flex items-center justify-between")
      span.flex.items-center.gap-2
        CircleStack(class="w-10 h-10 text-vetnolBlue")
        h2 Data Backup and Recovery
      span(class="text-gray-500 group-open:rotate-180 transition-transform") ▼
    p(class="mt-2 text-sm leading-relaxed")
      | Scheduled backups, disaster recovery planning, and fast, secure data restoration.

  // IT Consulting and Strategy
  details(class="bg-white rounded-xl shadow-md p-4 group open:shadow-lg transition-all duration-300")
    summary(class="cursor-pointer text-lg font-bold flex items-center justify-between")
      span.flex.items-center.gap-2
        Computer(class="w-10 h-10 text-vetnolBlue")
        h2 IT Consulting and Strategy
      span(class="text-gray-500 group-open:rotate-180 transition-transform") ▼
    p(class="mt-2 text-sm leading-relaxed")
      | Strategic guidance, IT roadmaps, and digital transformation consulting tailored to your business goals.

  // Training and User Support
  details(class="bg-white rounded-xl shadow-md p-4 group open:shadow-lg transition-all duration-300")
    summary(class="cursor-pointer text-lg font-bold flex items-center justify-between")
      span.flex.items-center.gap-2
        Person(class="w-10 h-10 text-vetnolBlue")
        h2 Training and User Support
      span(class="text-gray-500 group-open:rotate-180 transition-transform") ▼
    p(class="mt-2 text-sm leading-relaxed")
      | Onboarding, staff training, clear documentation, and ongoing user support.
</template>

<script setup lang="ts">
console.log("services visited")
</script>

<style lang="css">
.vetnologiesGradient {
    background: linear-gradient(to left, #09b123, #0090aa, #324aa3);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
</style>