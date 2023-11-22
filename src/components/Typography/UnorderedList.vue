<script setup lang="ts">
defineProps<{
    list: string[];
}>();
</script>

<template>
    <ul class="text-body my-8">
        <div v-for="item in list" class="mb-3 flex">
            <span class="inline-flex w-10 mt-2 md:w-6">
                <span class="inline-block w-1.5 h-1.5 bg-violet rounded-full" />
            </span>
            <p class="flex-1">{{ item }}</p>
        </div>
    </ul>
</template>
