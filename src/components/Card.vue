<script setup lang="ts">
import logo from '../assets/logos/blogr.svg';
import HeadingTwo from './Typography/HeadingTwo.vue';
import Paragraph from './Typography/Paragraph.vue';
import ColoredText from './Typography/ColoredText.vue';
</script>

<template>
    <router-link to="/job" class="relative bg-white p-8 pt-12 rounded-md">
        <div class="absolute top-0 -translate-y-1/2">
            <span
                class="inline-flex items-center justify-center bg-violet w-[3.125rem] h-[3.125rem] rounded-2xl"
            >
                <img :src="logo" alt="" class="" />
            </span>
        </div>

        <div class="mb-10">
            <div class="flex">
                <Paragraph>5h ago</Paragraph>
                <span class="text-body mx-2">•</span>
                <Paragraph>Full Time</Paragraph>
            </div>

            <HeadingTwo>Senior Software Engineer</HeadingTwo>
            <Paragraph>Scoot</Paragraph>
        </div>

        <ColoredText>United Kingdom</ColoredText>
    </router-link>
</template>
