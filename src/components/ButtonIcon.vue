<script setup lang="ts">
defineProps<{
    onClick?: () => void;
}>();
</script>

<template>
    <button class="bg-violet py-4 px-4 rounded-md" @click="onClick">
        <slot />
    </button>
</template>
