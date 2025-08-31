<template>
    <div class="relative">
        <slot name="image"></slot>
        <div class="absolute top-[50%] left-[50%] w-full h-full" style="transform: translate(-50%, -50%);">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    src: {
        type: String,
        required: true,
    },
    sizes: {
        type: String,
    },
    imgClass: {
        type: String,
        default: '',
    }
});
</script>