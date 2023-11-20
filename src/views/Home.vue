<script setup lang="ts">
import Container from '../components/Layout/Container.vue';
import SearchBar from '../components/SearchBar/SearchBar.vue';
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';
</script>

<template>
    <div class="bg-light-gray min-h-screen pb-20">
        <Container>
            <SearchBar />

            <div class="grid grid-cols-cards gap-6 gap-y-14 my-14 lg:gap-x-3 md:gap-y-12">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <div class="text-center">
                <Button />
            </div>
        </Container>
    </div>
</template>
