import { ref, toValue, watch, readonly } from 'vue';

function useNinjaId(id) {
  const internal = ref(toValue(id));
  watch(
    () => toValue(id),
    (value) => {
      internal.value = value || `nui-input-${Math.random().toString(36).slice(2)}`;
    }
  );
  return readonly(internal);
}

export { useNinjaId as u };
