<script setup lang="ts">
import IconSun from './Icons/IconSun.vue';
import IconMoon from './Icons/IconMoon.vue';
</script>

<template>
    <div className="flex items-center">
        <IconSun />

        <label className="cursor-pointer mx-3">
            <input type="checkbox" className="peer sr-only" />
            <span
                className="flex items-center px-1.5 bg-[#fff] w-12 h-6 rounded-full after:content-[''] after:block after:bg-violet after:w-3.5 after:h-3.5 after:rounded-full peer-checked:after:translate-x-[160%] after:transition-transform"
            />
        </label>

        <IconMoon />
    </div>
</template>
