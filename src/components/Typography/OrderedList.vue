<script setup lang="ts">
defineProps<{
    list: string[];
}>();
</script>

<template>
    <ol class="text-body my-8">
        <div v-for="(item, index) in list" class="mb-3 flex items-baseline">
            <div class="text-violet font-bold w-10 md:w-6">{{ index + 1 }}</div>
            <p class="flex-1">{{ item }}</p>
        </div>
    </ol>
</template>
