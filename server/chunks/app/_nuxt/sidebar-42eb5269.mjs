import { computed } from 'vue';
import { i as useAppConfig, z as useRoute, h as useState } from '../server.mjs';

function useSidebar() {
  const app = useAppConfig();
  const route = useRoute();
  const sidebars = computed(() => {
    if (app.tairo.sidebar?.navigation?.enabled === false || app.tairo.sidebar?.navigation?.items?.length === 0) {
      return [];
    }
    return app.tairo.sidebar?.navigation?.items;
  });
  const currentName = useState("sidebar-name", () => "");
  const isOpen = useState("sidebar-open", () => void 0);
  const hasSubsidebar = computed(() => {
    return sidebars.value?.some((sidebar) => sidebar.subsidebar?.component);
  });
  const current = computed(() => {
    if (!currentName.value) {
      return void 0;
    }
    return sidebars.value?.find(({ title }) => title === currentName.value);
  });
  function toggle() {
    if (!currentName.value && !isOpen.value) {
      if (!sidebars.value?.[0]?.title) {
        return;
      }
      currentName.value = sidebars.value[0].title;
    }
    isOpen.value = !isOpen.value;
  }
  function close(unselect = false) {
    isOpen.value = false;
    if (unselect) {
      currentName.value = "";
    }
  }
  function open(name) {
    currentName.value = name;
    isOpen.value = true;
  }
  function detect() {
    if (!app.tairo.sidebar?.navigation?.startOpen) {
      isOpen.value = false;
      return;
    }
    const item = sidebars.value?.find(
      (bar) => bar?.activePath && route.fullPath.startsWith(bar.activePath)
    );
    if (item) {
      currentName.value = item.title;
      {
        isOpen.value = Boolean(currentName.value);
      }
    }
    return;
  }
  function setup() {
    {
      detect();
      return;
    }
  }
  return {
    sidebars,
    hasSubsidebar,
    current,
    currentName,
    isOpen,
    toggle,
    close,
    open,
    detect,
    setup
  };
}

export { useSidebar as u };
