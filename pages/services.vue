<template lang="pug">
div(class="grid gap-6 p-6 text-gray-800")

  // Network Setup and Management
  div(class="bg-white p-6 rounded-xl shadow-md")
    div(class="flex flex-box grid-cols-2")
        h2(class="text-2xl font-bold mb-4 mr-2") Network Setup and Management
        Wifi()
    ul(class="list-disc list-inside space-y-2")
      li Local area network (LAN) and wide area network (WAN) design and implementation
      li Network monitoring and performance optimization
      li Advanced network security protocols (firewalls, VPNs, etc.)

  // Cybersecurity Services
  div(class="bg-white p-6 rounded-xl shadow-md")
    div(class="flex flex-box grid-cols-2")
        h2(class="text-2xl font-bold mb-4 mr-2") Cybersecurity Services
        // lock icon
        Lock() 
    ul(class="list-disc list-inside space-y-2")
      li Antivirus and anti-malware solutions
      li Firewall configuration and management
      li Intrusion detection and prevention
      li Security audits and vulnerability assessments

  // IT Help Desk and Technical Support
  div(class="bg-white p-6 rounded-xl shadow-md")
    div(class="flex flex-box grid-cols-2")
        h2(class="text-2xl font-bold mb-4 mr-2") IT Help Desk and Technical Support
        // phone icon
        Phone()
    ul(class="list-disc list-inside space-y-2")
      li Remote troubleshooting and support
      li On-site technical assistance
      li Hardware and software diagnostics and repair

  // Managed IT Services
  div(class="bg-white p-6 rounded-xl shadow-md")
    div(class="flex flex-box grid-cols-2")
        h2(class="text-2xl font-bold mb-4") Managed IT Services
        Shield()
    ul(class="list-disc list-inside space-y-2")
        li Proactive monitoring and maintenance
        li Regular security updates and patch management
        li Data backup and recovery planning

  // Cloud Services
  div(class="bg-white p-6 rounded-xl shadow-md")
    h2(class="text-2xl font-bold mb-4") Cloud Services
    ul(class="list-disc list-inside space-y-2")
      li Cloud storage and file sharing solutions
      li Cloud-based application management
      li Migration to cloud platforms (e.g., Microsoft Azure, Google Cloud, AWS)

  // Hardware and Software Solutions
  div(class="bg-white p-6 rounded-xl shadow-md")
    h2(class="text-2xl font-bold mb-4") Hardware and Software Solutions
    ul(class="list-disc list-inside space-y-2")
      li Desktop, laptop, and server setup and maintenance
      li Software installation, configuration, and updates
      li Mobile device management

  // Data Backup and Recovery
  div(class="bg-white p-6 rounded-xl shadow-md")
    h2(class="text-2xl font-bold mb-4") Data Backup and Recovery
    ul(class="list-disc list-inside space-y-2")
      li Automated backup solutions
      li Disaster recovery planning and execution
      li Data restoration services

  // IT Consulting and Strategy
  div(class="bg-white p-6 rounded-xl shadow-md")
    h2(class="text-2xl font-bold mb-4") IT Consulting and Strategy
    ul(class="list-disc list-inside space-y-2")
      li Technology assessments and planning
      li IT roadmap development
      li Guidance on digital transformation and business process optimization

  // Training and User Support
  div(class="bg-white p-6 rounded-xl shadow-md")
    h2(class="text-2xl font-bold mb-4") Training and User Support
    ul(class="list-disc list-inside space-y-2")
      li Employee technology training sessions
      li Documentation and user manuals
      li Ongoing user support and onboarding
</template>

<script setup lang="ts">
console.log("services visited")
</script>

<style lang="css">
.vetnologiesGradient {
    background: linear-gradient(to left, green, blue);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
</style>