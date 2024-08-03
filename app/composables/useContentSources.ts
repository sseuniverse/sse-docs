export const useContentSource = () => {
  const route = useRoute();
  const router = useRouter();
  const config = useRuntimeConfig().public;

  const branches = computed(() => [
    {
      id: "ui",
      name: "ui",
      label: "sse-ui",
      icon: "i-heroicons-cube",
      suffix: `v${config.version}`,
      click: () => select({ name: "main" }),
    },
    {
      id: "auth",
      name: "auth",
      label: "auth",
      icon: "i-heroicons-cube-transparent",
      suffix: "dev",
      click: () => select({ name: "auth" }),
    },
    {
      id: "icons",
      name: "icons",
      label: "icons",
      icon: "i-heroicons-cube",
      click: () => select({ name: "icons" }),
    },
    {
      id: "meta",
      name: "meta",
      label: "meta",
      icon: "i-heroicons-cube-transparent",
      suffix: "dev",
      disabled: false,
      click: () => select({ name: "meta" }),
    },
    {
        id: "meta",
        name: "meta",
        label: "meta",
        icon: "i-heroicons-cube-transparent",
        suffix: "dev",
        disabled: false,
        click: () => select({ name: "meta" }),
      },
  ]);

  const branch = computed(() =>
    branches.value.find(
      (b) =>
        b.name ===
        (route.path.startsWith("/auth")
          ? "auth"
          : route.path.startsWith("/icons")
            ? "icons"
            : "main")
    )
  );

  function select(b) {
    if (b.name === branch.value.name) {
      return;
    }

    if (b.name === "ui") {
      router.push("/ui/getting-started");
      return;
    }

    if (branch.value.name === "auth") {
      if (b.name === "auth") {
        router.push("/auth/getting-started");
      } else {
        router.push("/getting-started");
      }

      return;
    }

    if (b.name === "dev") {
      if (route.path.startsWith("/dev")) {
        return;
      }

      router.push(`/dev${route.path}`);
    } else {
      router.push(route.path.replace("/dev", ""));
    }
  }

  return {
    branches,
    branch,
  };
};
