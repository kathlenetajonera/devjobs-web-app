<script setup lang="ts">
import useWindowResize from '@/composables/useWindowResize';
import IconSearch from '../Icons/IconSearch.vue';

defineProps({
    text: String
});
defineEmits(['update:text', 'enter']);

const { windowWidth } = useWindowResize();
</script>

<template>
    <IconSearch />
    <input
        type="text"
        :placeholder="windowWidth < 1024 ? 'Filter by title...' : 'Filter by title, companies...'"
        :value="text"
        @input="$emit('update:text', ($event.target as HTMLInputElement).value)"
        @keyup.enter="$emit('enter')"
        class="text-sm text-black dark:text-white transition-colors placeholder:text-dark-gray flex-1 outline-none bg-transparent px-4 sm:w-full"
    />
</template>
