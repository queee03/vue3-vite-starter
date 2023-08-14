<route lang="json">
{
  "meta": {
    "layout": "default"
  }
}
</route>

<template>
  <IconMdiAccount />
  <RouterLink to="/about">about</RouterLink>
  <main class="text-3xl font-bold underline">{{ msg }},{{ count }}</main>
  <HelloWorld></HelloWorld>
  <UserHelloUser></UserHelloUser>
  <Child @click-count="handleClick"></Child>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Welcome'
})

const msg = ref('hi')
const count = ref(0)

const handleClick = (num: number) => {
  count.value += num
}
</script>

<style lang="scss"></style>
