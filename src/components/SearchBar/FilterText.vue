<script setup lang="ts">
import useWindowResize from '@/composables/useWindowResize';
import IconSearch from '../Icons/IconSearch.vue';

const { windowWidth } = useWindowResize();
</script>

<template>
    <IconSearch />
    <input
        type="text"
        :placeholder="
            windowWidth < 1024 ? 'Filter by title...' : 'Filter by title, companies, expertise...'
        "
        class="text-sm text-black placeholder:text-dark-gray flex-1 outline-none bg-transparent px-4 sm:w-full"
    />
</template>
