<script setup lang="ts">
import { onMounted, ref } from 'vue';
import IconSun from './Icons/IconSun.vue';
import IconMoon from './Icons/IconMoon.vue';

const isDarkMode = ref(window.matchMedia('(prefers-color-scheme: dark)').matches);

const handleToggle = () => {
    document.documentElement.classList.toggle('dark');
    isDarkMode.value = !isDarkMode.value;
};

onMounted(() => {
    if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
    }
});
</script>

<template>
    <div className="flex items-center">
        <IconSun />

        <label className="cursor-pointer mx-3">
            <input
                type="checkbox"
                className="peer sr-only"
                :checked="isDarkMode"
                @change="handleToggle"
            />
            <span
                className="flex items-center px-1.5 bg-[#fff] w-12 h-6 rounded-full after:content-[''] after:block after:bg-violet after:w-3.5 after:h-3.5 after:rounded-full peer-checked:after:translate-x-[160%] after:transition-transform"
            />
        </label>

        <IconMoon />
    </div>
</template>
