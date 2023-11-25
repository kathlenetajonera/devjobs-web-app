<script setup lang="ts">
import IconLocation from '../Icons/IconLocation.vue';

defineProps<{
    locations: string[];
    location: string;
}>();
defineEmits(['update:location']);
</script>

<template>
    <div class="flex items-center">
        <IconLocation />

        <select
            :class="[
                location ? 'text-black dark:text-white' : 'text-dark-gray',
                'text-sm px-4 bg-transparent appearance-none outline-none transition-colors'
            ]"
            :value="location"
            @input="$emit('update:location', ($event.target as HTMLInputElement).value)"
        >
            <option value="">Filter by location...</option>
            <option v-for="loc in locations" :value="loc">{{ loc }}</option>
        </select>
    </div>
</template>
