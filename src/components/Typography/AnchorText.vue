<script setup lang="ts">
defineProps<{
    link: string;
}>();
</script>

<template>
    <a :href="link" target="_blank" class="text-body text-sm leading-none block">
        {{ link }}
    </a>
</template>
