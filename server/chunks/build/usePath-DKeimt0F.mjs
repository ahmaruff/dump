import { ref, watch } from 'vue';
import { m as useRoute } from './server.mjs';

function usePath() {
  const path = ref("");
  const route = useRoute();
  const updatePath = () => {
    path.value = route.path;
    console.log(path.value);
  };
  watch(
    () => route.path,
    () => {
      updatePath();
    }
  );
  return {
    path
  };
}

export { usePath as u };
