<script setup lang="ts">
import type { NavItem } from "@nuxt/content";
import type { HeaderLink } from "@sse-ui/nuxt/types";

const navigation = inject<Ref<NavItem[]>>("navigation", ref([]));
const { metaSymbol } = useShortcuts();
const { header } = useAppConfig();

const links = [
  {
    label: "Docs",
    to: "/ui/getting-started",
  },
  {
    label: "Releases",
    to: "/releases",
  },
  {
    label: "Blog",
    to: "/blog",
  },
];
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <template v-if="header?.logo?.dark || header?.logo?.light">
        <UColorModeImage v-bind="{ class: 'h-6 w-auto', ...header?.logo }" />
      </template>
      <template v-else>
        SSE Nuxt
        <UBadge
          v-if="$route.path.startsWith('/ui')"
          label="UI"
          variant="subtle"
          class="mb-0.5"
        />
        <UBadge
          v-if="$route.path.startsWith('/auth')"
          label="Auth"
          variant="subtle"
          class="mb-0.5"
        />
        <UBadge
          v-if="$route.path.startsWith('/icons')"
          label="Icons"
          variant="subtle"
          class="mb-0.5"
        />
        <UBadge
          v-if="$route.path.startsWith('/meta')"
          label="Meta"
          variant="subtle"
          class="mb-0.5"
        />
        <UBadge
          v-if="$route.path.startsWith('/dayjs')"
          label="Day JS"
          variant="subtle"
          class="mb-0.5"
        />
        <UBadge
          v-if="$route.path.startsWith('/releases')"
          label="Release"
          variant="subtle"
          class="mb-0.5"
        />
      </template>
    </template>

    <!-- <template v-if="header?.search" #center>
      <UContentSearchButton class="hidden lg:flex" />
    </template> -->

    <template #right>
      <!-- <UContentSearchButton
        v-if="header?.search"
        :label="null"
        class="lg:hidden"
      /> -->
      <ColorPicker />

      <UTooltip
        text="Search"
        :shortcuts="[metaSymbol, 'K']"
        :popper="{ strategy: 'absolute' }"
      >
        <UContentSearchButton :label="null" />
      </UTooltip>

      <UColorModeButton />

      <UButton
        to="https://github.com/sseuniverse/sse-docs"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        v-bind="$ui.button.secondary as any"
      />

      <!-- <UColorModeButton v-if="header?.colorMode" /> -->
      <!-- <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }"
        />
      </template> -->
    </template>

    <template #panel>
      <UAsideLinks :links="links" />
      <UDivider type="dashed" class="my-4" />
      <!-- <BranchSelector /> -->
      <UNavigationTree
        :links="mapContentNavigation(navigation)"
        :multiple="false"
        default-open
      />
    </template>
    <!-- <template #panel>
      <UDivider type="dashed" class="my-4" />
      <BranchSelector />
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template> -->
  </UHeader>
</template>
