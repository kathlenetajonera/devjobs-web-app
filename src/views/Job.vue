<script setup lang="ts">
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
</script>

<template>
    <div class="bg-light-gray min-h-screen pb-20">
        <InnerContainer>
            <div class="h-[140px] flex -translate-y-10 md:h-auto">
                <div
                    class="bg-pink-200 w-[140px] h-[140px] flex items-center justify-center rounded-bl-md md:w-[50px] md:h-[50px] md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-2xl"
                >
                    <img :src="logo" alt="" />
                </div>
                <div
                    class="flex-1 flex items-center justify-between bg-white px-8 rounded-r-md md:flex-col md:pt-12 md:pb-6 md:rounded-md"
                >
                    <div class="md:mb-8 md:text-center">
                        <HeadingTwo customClass="mt-0 md:mb-3">Scoot</HeadingTwo>
                        <AnchorText>scoot.com</AnchorText>
                    </div>

                    <Button />
                </div>
            </div>
            <div class="bg-white p-8 rounded-md md:p-6">
                <div class="flex">
                    <Paragraph>1w ago</Paragraph>
                    <span class="text-body mx-2">•</span>
                    <Paragraph>Part Time</Paragraph>
                </div>
                <div class="flex items-center justify-between md:flex-col md:items-start">
                    <div class="md:mb-12">
                        <HeadingOne>Senior Software Engineer</HeadingOne>
                        <ColoredText>United Kingdom</ColoredText>
                    </div>
                    <Button />
                </div>
                <div class="mt-12">
                    <div class="mb-12">
                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
                            aspernatur vel dolorem repudiandae perferendis nostrum ea doloremque?
                            Alias sed sunt at rerum! Alias ipsum vel, repellat molestias, sapiente
                            voluptatum distinctio dolore nulla rerum delectus veritatis ab tempora,
                            at neque perspiciatis quidem tenetur blanditiis saepe consectetur.
                            Perspiciatis dolorum officiis, repudiandae sapiente sequi mollitia, est
                            labore laudantium odit beatae quos sunt recusandae! Delectus, maxime. Ex
                            odio culpa unde architecto ad, ipsum similique dicta rerum voluptate
                            officiis quisquam aliquam in maxime animi nulla, repudiandae numquam
                            corrupti? Commodi mollitia impedit eligendi consequuntur blanditiis,
                            consectetur dolorum placeat fugit est ea. In aspernatur sint quasi
                            nobis!
                        </Paragraph>
                    </div>
                    <div class="mb-12">
                        <HeadingThree>Requirements</HeadingThree>
                        <Paragraph
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                            numquam, commodi enim eligendi ab eius rerum ipsum tenetur, repudiandae,
                            reprehenderit amet ad? Minima quo ea culpa sed, ipsa impedit animi aut
                            nulla error excepturi tempora asperiores, temporibus hic laudantium
                            corrupti possimus aliquid voluptatum ipsam. Ipsum autem nulla eligendi
                            consequuntur atque.
                        </Paragraph>
                        <UnorderedList />
                    </div>
                    <div class="mb-12">
                        <HeadingThree>What You Will Do</HeadingThree>
                        <Paragraph
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                            numquam, commodi enim eligendi ab eius rerum ipsum tenetur, repudiandae,
                            reprehenderit amet ad? Minima quo ea culpa sed, ipsa impedit animi aut
                            nulla error excepturi tempora asperiores, temporibus hic laudantium
                            corrupti possimus aliquid voluptatum ipsam. Ipsum autem nulla eligendi
                            consequuntur atque.
                        </Paragraph>

                        <OrderedList />
                    </div>
                </div>
            </div>
        </InnerContainer>

        <div class="bg-white py-6 mt-20">
            <InnerContainer>
                <div class="flex items-center justify-between">
                    <div class="md:hidden">
                        <HeadingTwo customClass="mt-0 mb-2">Senior Software Engineer</HeadingTwo>
                        <Paragraph>Scoot</Paragraph>
                    </div>
                    <Button />
                </div>
            </InnerContainer>
        </div>
    </div>
</template>
