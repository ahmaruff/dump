import { n as useNuxtApp } from '../server.mjs';

function useNinjaToaster() {
  const { $nt } = useNuxtApp();
  return $nt;
}
function useToaster() {
  const $nt = useNinjaToaster();
  function show(props, options) {
    return $nt.showComponent("TairoToaster", {
      props,
      options
    });
  }
  return {
    show,
    clear: $nt.clear,
    clearAll: $nt.clearAll
  };
}

export { useToaster as u };
