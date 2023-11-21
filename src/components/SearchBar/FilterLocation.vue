<script setup lang="ts">
import IconLocation from '../Icons/IconLocation.vue';

defineProps<{
    locations: string[];
}>();
</script>

<template>
    <div class="flex items-center">
        <IconLocation />
        <select class="text-sm px-4 bg-transparent appearance-none outline-none text-dark-gray">
            <option value="">Filter by location...</option>
            <option v-for="loc in locations" :value="loc">{{ loc }}</option>
        </select>
    </div>
</template>
