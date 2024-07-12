import { ref, computed } from 'vue';
import { u as useRoute$1, j as useState } from './server.mjs';

const defaultSidebarCfg = {
  circularMenu: {
    enabled: false,
    tools: []
  },
  navigation: {
    enabled: true,
    logo: {
      component: "LogoCommerce",
      props: {}
    },
    startOpen: false,
    items: [
      {
        title: "Dashboards",
        to: "/dashboards",
        icon: {
          name: "IconDashboard"
        }
      },
      {
        title: "Channel",
        to: "/channel",
        icon: {
          name: "IconChannel"
        }
      },
      {
        title: "Kontak",
        to: "/kontak",
        icon: {
          name: "IconContact"
        }
      },
      {
        title: "Produk",
        to: "/produk",
        icon: {
          name: "IconProduct"
        }
      },
      {
        title: "Produk tes",
        to: "/tes",
        icon: {
          name: "IconProduct"
        }
      }
    ]
  },
  toolbar: {
    enabled: true,
    showNavBurger: true,
    showTitle: true,
    tools: []
  }
};
const sidebarConfig = ref();
function useSidebarConfig() {
  const setSidebarConfig = (config) => {
    sidebarConfig.value = config;
  };
  const getSidebarConfig2 = () => {
    return sidebarConfig.value || defaultSidebarCfg;
  };
  return { setSidebarConfig, getSidebarConfig: getSidebarConfig2, sidebarConfig };
}
const { getSidebarConfig } = useSidebarConfig();
function useSidebar() {
  const route = useRoute$1();
  const sidebarConfiguration = computed(() => {
    return getSidebarConfig();
  });
  const sidebars = computed(() => {
    var _a, _b, _c, _d;
    if (((_a = sidebarConfiguration.value.navigation) == null ? void 0 : _a.enabled) == false || ((_c = (_b = sidebarConfiguration.value.navigation) == null ? void 0 : _b.items) == null ? void 0 : _c.length) === 0) {
      return [];
    }
    return (_d = sidebarConfiguration.value.navigation) == null ? void 0 : _d.items;
  });
  const currentName = useState("sidebar-name", () => "");
  const isOpen = useState("sidebar-open", () => void 0);
  const hasSubsidebar = computed(() => {
    var _a;
    return (_a = sidebars.value) == null ? void 0 : _a.some((sidebar) => {
      var _a2;
      return (_a2 = sidebar.subsidebar) == null ? void 0 : _a2.component;
    });
  });
  const current = computed(() => {
    var _a;
    if (!currentName.value) {
      return void 0;
    }
    return (_a = sidebars.value) == null ? void 0 : _a.find(({ title }) => title === currentName.value);
  });
  function toggle() {
    var _a, _b;
    console.log("awal", isOpen);
    if (!currentName.value && !isOpen.value) {
      if (!((_b = (_a = sidebars.value) == null ? void 0 : _a[0]) == null ? void 0 : _b.title)) {
        return;
      }
      currentName.value = sidebars.value[0].title;
    }
    console.log("awal1", isOpen.value);
    console.log("awal1", !isOpen.value);
    isOpen.value = !isOpen.value;
    console.log("akhir", isOpen);
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
    var _a, _b;
    if (!((_a = sidebarConfiguration.value.navigation) == null ? void 0 : _a.startOpen)) {
      isOpen.value = false;
      return;
    }
    const item = (_b = sidebars.value) == null ? void 0 : _b.find(
      (bar) => (bar == null ? void 0 : bar.activePath) && route.fullPath.startsWith(bar.activePath)
    );
    if (item) {
      currentName.value = item.title;
      {
        isOpen.value = false;
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
    sidebarConfiguration,
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

export { useSidebarConfig as a, useSidebar as u };
