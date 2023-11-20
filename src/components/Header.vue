<script setup lang="ts">
import Logo from './Logo.vue';
import ModeToggle from './ModeToggle.vue';
import Container from './Layout/Container.vue';
</script>

<template>
    <div class="bg-header bg-no-repeat bg-cover bg-left-bottom h-40">
        <Container>
            <div class="flex justify-between items-center pt-11 md:pt-6">
                <Logo />
                <ModeToggle />
            </div>
        </Container>
    </div>
</template>
