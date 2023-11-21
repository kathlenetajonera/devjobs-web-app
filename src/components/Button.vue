<script setup lang="ts">
defineProps<{
    label: string;
    onClick?: () => void;
}>();
</script>

<template>
    <button
        class="bg-violet text-sm text-white font-semibold min-w-[120px] py-4 px-5 rounded-md leading-none lg:min-w-fit md:w-full"
        @click="onClick"
    >
        {{ label }}
    </button>
</template>
