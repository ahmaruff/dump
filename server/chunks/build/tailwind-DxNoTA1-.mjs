import { ref } from 'vue';
import { u as useMediaQuery } from './index-CwDpmA7v.mjs';

function useTailwindColors() {
  const primary = ref("transparent");
  const success = ref("transparent");
  const info = ref("transparent");
  const warning = ref("transparent");
  const danger = ref("transparent");
  const yellow = ref("transparent");
  const title = ref("transparent");
  const subtitle = ref("transparent");
  return {
    primary,
    info,
    success,
    warning,
    danger,
    yellow,
    title,
    subtitle
  };
}
function useTailwindBreakpoints() {
  const xs = useMediaQuery("(max-width: 639px)");
  const sm = useMediaQuery("(min-width: 640px)");
  const md = useMediaQuery("(min-width: 768px)");
  const lg = useMediaQuery("(min-width: 1025px)");
  const ptablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)"
  );
  const ltablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)"
  );
  const xl = useMediaQuery("(min-width: 1280px)");
  const doublexl = useMediaQuery("(min-width: 1536px)");
  return {
    xs,
    sm,
    md,
    lg,
    ptablet,
    ltablet,
    xl,
    doublexl
  };
}

export { useTailwindBreakpoints as a, useTailwindColors as u };
