<template>
  <IconMdiAccount />
  <RouterLink to="/about">about</RouterLink>
  <main class="text-3xl font-bold underline">{{ msg }}</main>
  <HelloWorld></HelloWorld>
  <UserHelloUser></UserHelloUser>
</template>

<script setup lang="ts">
const msg = ref('hi')
</script>

<style lang="scss"></style>
