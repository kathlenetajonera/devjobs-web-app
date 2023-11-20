<script setup lang="ts">
defineProps<{
    customClass?: string;
}>();
</script>
<template>
    <h1 :class="['text-black text-2xl leading-none font-bold my-4 md:text-xl', customClass || '']">
        <slot />
    </h1>
</template>
