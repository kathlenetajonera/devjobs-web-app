<script setup lang="ts">
defineProps<{
    customClass?: string;
}>();
</script>
<template>
    <h2
        :class="[
            'text-black dark:text-white transition-colors text-xl leading-none font-bold my-4',
            customClass || ''
        ]"
    >
        <slot />
    </h2>
</template>
