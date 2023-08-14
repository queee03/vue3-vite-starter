<template>
  <div>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits<
  SE<{
    clickCount(num: number): void
  }>
>()

const handleClick = () => {
  console.log('click')
  emits('clickCount', 1)
}
</script>

<style scoped></style>
