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
  <main class="text-3xl font-bold underline cursor-pointer" @click="handleClick(1)">
    {{ msg }},{{ count }}
  </main>
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
