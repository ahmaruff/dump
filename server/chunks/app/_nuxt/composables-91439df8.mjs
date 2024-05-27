import { computed } from 'vue';
import { h as useState } from '../server.mjs';

function useJwtAuth() {
  const data = useState("data");
  const token = computed(() => data.value?.token);
  const user = computed(() => data.value?.user);
  const loggedIn = computed(() => !!data.value);
  const headers = computed(
    () => loggedIn.value ? {
      Accept: "application/json",
      Authorization: "Bearer " + data.value.token
    } : { Accept: "apllication/json" }
  );
  return {
    token,
    user,
    loggedIn,
    headers: headers.value
  };
}

export { useJwtAuth as u };
