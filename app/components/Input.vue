<template>
    <input type="text" class="m-1 h-[60px] border-1 border-[#C0E5D4] outline-[#C0E5D4] rounded-[6px] placeholder:font-mincho" v-model="value">
</template>

<script setup>
const value = defineModel();
</script>