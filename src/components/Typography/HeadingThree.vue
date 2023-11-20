<script setup lang="ts">
defineProps<{
    customClass?: string;
}>();
</script>
<template>
    <h2 :class="['text-black text-lg leading-none font-bold my-4', customClass || '']">
        <slot />
    </h2>
</template>
