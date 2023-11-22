<script setup lang="ts">
defineProps<{
    customClass?: string;
}>();
</script>
<template>
    <h1
        :class="[
            'text-black text-3xl leading-none font-bold my-4 lg:text-2xl md:text-xl',
            customClass || ''
        ]"
    >
        <slot />
    </h1>
</template>
