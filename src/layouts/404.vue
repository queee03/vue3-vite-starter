<template>
  <div>
    404
    <router-view></router-view>
    <button @click="router.back()">返回</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style scoped></style>
