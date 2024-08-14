import pkg from "@sse-ui/nuxt/package.json";

export const useContentSource = () => {
  const route = useRoute();
  const router = useRouter();
  const config = useRuntimeConfig().public;

  const branches = computed(() => [
    {
      id: "main",
      name: "main",
      label: "ui",
      icon: "i-heroicons-cube",
      suffix: `v${pkg.version}`,
      click: () => select({ name: "main" }),
    },
    {
      id: "auth",
      name: "auth",
      label: "Auth",
      icon: "i-heroicons-cube-transparent",
      suffix: "auth",
      click: () => select({ name: "auth" }),
    },
    {
      id: "meta",
      name: "meta",
      label: "Component Meta",
      icon: "i-heroicons-cube-transparent",
      suffix: "auth",
      click: () => select({ name: "meta" }),
    },
  ]);

  const branch = computed(() =>
    branches.value.find(
      (b) =>
        b.name ===
        (route.path.startsWith("/auth")
          ? "auth"
          : route.path.startsWith("/meta")
            ? "meta"
            : "main")
    )
  );

  function select(b) {
    if (b.name === branch.value.name) {
      return;
    }

    if (b.name === "meta") {
      router.push("/auth");
      return;
    }

    if (branch.value.name === "meta") {
      if (b.name === "auth") {
        router.push("/auth");
      } else {
        router.push("/meta");
      }

      return;
    }

    if (b.name === "auth") {
      if (route.path.startsWith("/auth")) {
        return;
      }

      router.push(`/auth${route.path}`);
    } else {
      router.push(route.path.replace("/auth", ""));
    }
  }

  return {
    branches,
    branch,
  };
};
