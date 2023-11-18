<script setup lang="ts">
import logo from '../assets/logos/blogr.svg';
</script>

<template>
    <div class="relative bg-white p-8 pt-12 rounded-md">
        <div class="absolute top-0 -translate-y-1/2">
            <span
                class="inline-flex items-center justify-center bg-violet w-[3.125rem] h-[3.125rem] rounded-2xl"
            >
                <img :src="logo" alt="" class="" />
            </span>
        </div>

        <div class="mb-10">
            <div class="flex">
                <p class="text-body">5h ago</p>
                <span class="text-body mx-2">•</span>
                <p class="text-body">Full Time</p>
            </div>

            <h2 class="text-black text-xl leading-none font-bold my-4">Senior Software Engineer</h2>
            <p>Scoot</p>
        </div>

        <p class="text-violet text-sm font-bold">United Kingdom</p>
    </div>
</template>
