<!-- Old Ui Code  -->

<!-- <script setup lang="ts">
const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);

useSeoMeta({
  titleTemplate: "",
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
});
</script> -->

<!-- <template>
    <div>
        <ULandingHero v-if="page.hero" v-bind="page.hero">
            <template #headline>
                <UBadge v-if="page.hero.headline" variant="subtle" size="lg"
                    class="relative rounded-full font-semibold">
                    <NuxtLink :to="page.hero.headline.to" target="_blank" class="focus:outline-none" tabindex="-1">
                        <span class="absolute inset-0" aria-hidden="true" />
                    </NuxtLink>

                    {{ page.hero.headline.label }}

                    <UIcon v-if="page.hero.headline.icon" :name="page.hero.headline.icon"
                        class="ml-1 w-4 h-4 pointer-events-none" />
                </UBadge>
            </template>

            <template #title>
                <MDC :value="page.hero.title" />
            </template>

            <MDC :value="page.hero.code" tag="pre" class="prose prose-primary dark:prose-invert mx-auto" />
        </ULandingHero>

        <ULandingSection :title="page.features.title" :links="page.features.links">
            <UPageGrid>
                <ULandingCard v-for="(item, index) of page.features.items" :key="index" v-bind="item" />
            </UPageGrid>
        </ULandingSection>
    </div>
</template> -->

<!-- New Ui Code -->
<script setup lang="ts">
import { useClipboard, useElementBounding } from "@vueuse/core";

const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);

const source = ref("npm install @sse-ui/nuxt");
const { copy, copied } = useClipboard({ source });

useSeoMeta({
  titleTemplate: "",
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
});
</script>
<script lang="ts">
import { getNpmDownloads, getVersion } from "~/composables/getStats";
const downloads = ref<Number>(0);
const version = ref<Number>(0)
export default {
  async mounted() {
    downloads.value = await getNpmDownloads("@sse-ui/nuxt");
    version.value = await getVersion("@sse-ui/nuxt")
  },
};
</script>

<template>
  <div>
    <ULandingHero
      :ui="{ base: 'relative z-[1]', container: 'max-w-4xl' }"
      class="mb-[calc(var(--header-height)*2)]"
    >
      <template #headline>
        <UBadge
          variant="subtle"
          size="md"
          class="hover:bg-primary-100 dark:bg-primary-950/100 dark:hover:bg-primary-900 transition-color relative font-medium rounded-full shadow-none"
        >
          <NuxtLink
            :to="`https://github.com/sseworld/sse-nuxt-ui/releases/tag/v3.0.0`"
            target="_blank"
            class="focus:outline-none"
            aria-label="Go to last relase"
            tabindex="-1"
          >
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>

          <span class="flex items-center gap-1">
            SSE Nuxt UI v{{ version }} is out!
          </span>
        </UBadge>
      </template>

      <template #title>
        <span v-html="page.hero?.title" />
      </template>

      <template #description>
        <span v-html="page.hero?.description" />
      </template>

      <template #links>
        <UButton
          label="Get Started"
          trailing-icon="i-heroicons-arrow-right-20-solid"
          size="lg"
          to="/ui/getting-started/installation"
        />

        <UInput
          v-model="source"
          color="gray"
          readonly
          autocomplete="off"
          icon="i-heroicons-command-line"
          class="w-72"
          input-class="focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700"
          aria-label="Install @nuxt/ui"
          size="lg"
          :ui="{ icon: { trailing: { pointer: '' } } }"
        >
          <template #trailing>
            <UButton
              aria-label="Copy Code"
              :color="copied ? 'primary' : 'gray'"
              variant="link"
              size="2xs"
              :icon="
                copied
                  ? 'i-heroicons-clipboard-document-check'
                  : 'i-heroicons-clipboard-document'
              "
              @click="copy(source)"
            />
          </template>
        </UInput>
      </template>
    </ULandingHero>

    <ULandingSection
      v-for="(section, index) of page.sections"
      :key="index"
      v-bind="section"
    >
      <template v-if="section.title" #title>
        <span v-html="section?.title" />
      </template>

      <template v-if="section.description" #description>
        <span v-html="section.description" />
      </template>

      <template #features>
        <ULandingGrid class="lg:-mb-20 lg:auto-rows-[3rem]">
          <ULandingCard
            v-for="(card, subIndex) of section.cards"
            :key="subIndex"
            v-bind="card"
            :ui="{
              background:
                'dark:bg-gray-900/50 dark:lg:bg-gradient-to-b from-gray-700/50 to-gray-950/50',
              body: {
                base: 'flex-1',
                background:
                  'dark:bg-gray-800/50 dark:lg:bg-gray-900/50 backdrop-blur-lg',
              },
            }"
            class="flex flex-col"
          >
            <UColorModeImage
              :light="`${card.image.path}-light.svg`"
              :dark="`${card.image.path}-dark.svg`"
              :width="card.image.width"
              :height="card.image.height"
              :alt="card.title"
              loading="lazy"
              class="object-cover w-full"
            />
          </ULandingCard>
        </ULandingGrid>
      </template>
    </ULandingSection>

    <ULandingSection
      class="!pt-0 dark:bg-gradient-to-b from-gray-950/50 to-gray-900"
    >
      <ULandingCTA
        align="left"
        :card="false"
        :ui="{
          body: {
            padding: '!p-0',
          },
          title: 'text-center lg:text-left lg:text-5xl',
          description:
            'mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 lg:gap-16',
          links: '-ml-3 justify-center lg:justify-start flex-wrap gap-y-3',
        }"
      >
        <template #title>
          <span v-html="page.cta.title" />
        </template>

        <template #description>
          <NuxtLink
            class="text-center lg:text-left group"
            to="https://npmjs.org/package/@sse-ui/nuxt"
            target="_blank"
          >
            <p
              class="text-5xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400"
            >
              {{ downloads }}+
            </p>
            <p>monthly downloads</p>
          </NuxtLink>
        </template>

        <template #links>
          <UButton
            v-for="user in page.cta.users"
            :key="user.username"
            :to="user.to"
            size="md"
            color="gray"
            variant="ghost"
            target="_blank"
          >
            <UAvatar
              :alt="user.username"
              :src="`https://ipx.nuxt.com/s_80x80/gh_avatar/${user.username}`"
              :srcset="`https://ipx.nuxt.com/s_160x160/gh_avatar/${user.username} 2x`"
              width="80"
              height="80"
              size="md"
              loading="lazy"
            />

            <div class="text-left">
              <p class="font-medium">
                {{ user.name }}
              </p>
              <p class="text-gray-500 dark:text-gray-400 leading-4">
                {{ `@${user.username}` }}
              </p>
            </div>
          </UButton>
        </template>
      </ULandingCTA>
    </ULandingSection>

    <ULandingSection
      v-for="(section, index) in page.pro.sections"
      :key="index"
      v-bind="section"
      class="!pt-0"
    >
      <MDC
        v-if="section.code"
        :value="section.code"
        tag="pre"
        class="prose prose-primary dark:prose-invert max-w-none"
      />
    </ULandingSection>
  </div>
</template>

<style scoped lang="postcss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

._screen_xl {
  display: none;
}
@media (min-width: 1280px) and (min-height: 955px) {
  ._screen_xl {
    display: block;
  }
  ._not_screen_xl {
    display: none;
  }
}
</style>
