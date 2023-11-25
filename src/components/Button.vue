<script setup lang="ts">
defineProps<{
    label: string;
    secondary?: boolean;
    onClick?: () => void;
}>();
</script>

<template>
    <button
        :class="[
            'text-sm font-semibold min-w-[120px] py-4 px-5 rounded-md leading-none transition-[background] duration-300 lg:min-w-fit md:w-full',
            secondary
                ? 'bg-light-violet text-violet hover:bg-[#c5c9f4] dark:bg-[#303642] dark:text-white transition-colors'
                : 'bg-violet text-white hover:bg-[#939bf4]'
        ]"
        @click="onClick"
    >
        {{ label }}
    </button>
</template>
