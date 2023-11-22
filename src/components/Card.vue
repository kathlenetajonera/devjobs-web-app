<script setup lang="ts">
import HeadingTwo from './Typography/HeadingTwo.vue';
import Paragraph from './Typography/Paragraph.vue';
import ColoredText from './Typography/ColoredText.vue';

defineProps<{
    id: number;
    logo: string;
    logoBackground: string;
    postedAt: string;
    contract: string;
    position: string;
    company: string;
    location: string;
}>();
</script>

<template>
    <router-link
        :to="{ name: 'Job', params: { id } }"
        class="relative bg-white p-8 pt-12 rounded-md"
    >
        <div class="absolute top-0 -translate-y-1/2">
            <span
                class="inline-flex items-center justify-center w-[3.125rem] h-[3.125rem] rounded-2xl"
                :style="{ backgroundColor: logoBackground }"
            >
                <img :src="logo" :alt="company" />
            </span>
        </div>

        <div class="mb-10">
            <div class="flex">
                <Paragraph>{{ postedAt }}</Paragraph>
                <span class="text-body mx-2">•</span>
                <Paragraph>{{ contract }}</Paragraph>
            </div>

            <HeadingTwo>{{ position }}</HeadingTwo>
            <Paragraph>{{ company }}</Paragraph>
        </div>

        <ColoredText>{{ location }}</ColoredText>
    </router-link>
</template>
