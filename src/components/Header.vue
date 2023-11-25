<script setup lang="ts">
import Logo from './Logo.vue';
import ModeToggle from './ModeToggle.vue';
import Container from './Layout/Container.vue';
</script>

<template>
    <div class="bg-light-gray dark:bg-dark transition-[background]">
        <div class="bg-header bg-no-repeat bg-cover bg-left-bottom h-header">
            <Container>
                <div class="flex justify-between items-center pt-11 md:pt-6">
                    <Logo />
                    <ModeToggle />
                </div>
            </Container>
        </div>
    </div>
</template>
