<script setup lang="ts">
import { onMounted, ref } from 'vue';
import InnerContainer from '../components/Layout/InnerContainer.vue';
import HeadingOne from '../components/Typography/HeadingOne.vue';
import HeadingTwo from '../components/Typography/HeadingTwo.vue';
import HeadingThree from '../components/Typography/HeadingThree.vue';
import Paragraph from '../components/Typography/Paragraph.vue';
import AnchorText from '../components/Typography/AnchorText.vue';
import ColoredText from '../components/Typography/ColoredText.vue';
import UnorderedList from '../components/Typography/UnorderedList.vue';
import OrderedList from '../components/Typography/OrderedList.vue';
import Button from '../components/Button.vue';
import data from '../assets/data.json';

const props = defineProps<{
    id: string;
}>();

const jobData = ref();

onMounted(() => {
    const job = data.find((job) => job.id === parseInt(props.id));
    jobData.value = job;
});

const openInNewTab = (url: string) => window.open(url, '_blank');
</script>

<template>
    <div class="bg-light-gray dark:bg-dark transition-[background] min-h-screen">
        <div v-if="jobData">
            <InnerContainer>
                <div class="h-[140px] flex -translate-y-10 md:h-auto">
                    <div
                        class="bg-pink-200 w-[140px] h-[140px] flex items-center justify-center rounded-bl-md md:w-[50px] md:h-[50px] md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-2xl"
                        :style="{ backgroundColor: jobData.logoBackground }"
                    >
                        <img
                            :src="jobData.logo"
                            :alt="jobData.company"
                            class="w-20 object-cover md:w-auto"
                        />
                    </div>
                    <div
                        class="flex-1 flex items-center justify-between bg-white dark:bg-black transition-[background] px-10 rounded-r-md md:flex-col md:p-6 md:pt-12 md:pb-6 md:rounded-md"
                    >
                        <div class="md:mb-8 md:text-center">
                            <HeadingTwo customClass="mt-0 md:mb-3">
                                {{ jobData.company }}
                            </HeadingTwo>
                            <AnchorText :link="jobData.website" />
                        </div>

                        <Button
                            label="Company Site"
                            secondary
                            @click="openInNewTab(jobData.website)"
                        />
                    </div>
                </div>
                <div class="bg-white dark:bg-black transition-[background] p-10 rounded-md md:p-6">
                    <div class="flex">
                        <Paragraph>{{ jobData.postedAt }}</Paragraph>
                        <span class="text-body mx-2">•</span>
                        <Paragraph>{{ jobData.contract }}</Paragraph>
                    </div>
                    <div class="flex items-center justify-between md:flex-col md:items-start">
                        <div class="md:mb-12">
                            <HeadingOne>{{ jobData.position }}</HeadingOne>
                            <ColoredText>{{ jobData.location }}</ColoredText>
                        </div>
                        <Button label="Apply Now" @click="openInNewTab(jobData.apply)" />
                    </div>
                    <div class="mt-12">
                        <div class="mb-12">
                            <Paragraph>
                                {{ jobData.description }}
                            </Paragraph>
                        </div>
                        <div class="mb-12">
                            <HeadingThree customClass="mb-6">Requirements</HeadingThree>
                            <Paragraph>{{ jobData.requirements.content }}</Paragraph>
                            <UnorderedList :list="jobData.requirements.items" />
                        </div>
                        <div>
                            <HeadingThree customClass="mb-6">What You Will Do</HeadingThree>
                            <Paragraph>{{ jobData.role.content }} </Paragraph>
                            <OrderedList :list="jobData.role.items" />
                        </div>
                    </div>
                </div>
            </InnerContainer>

            <div class="bg-white dark:bg-black transition-[background] py-6 mt-20">
                <InnerContainer>
                    <div class="flex items-center justify-between">
                        <div class="md:hidden">
                            <HeadingTwo customClass="mt-0 mb-2">{{ jobData.position }}</HeadingTwo>
                            <Paragraph>{{ jobData.company }}</Paragraph>
                        </div>
                        <Button label="Apply Now" @click="openInNewTab(jobData.apply)" />
                    </div>
                </InnerContainer>
            </div>
        </div>
    </div>
</template>
