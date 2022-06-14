<template>
  <div class="edit">
    <!-- <input type="text" v-model="task.title" /> -->
    <!-- <input type="text" v-model="task.subtitle" /> -->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, Ref } from "vue";
import { useStore } from "../store";
import { Task } from "@/models/task.models";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const store = useStore();
    const route = useRoute();
    const { taskId } = route.params;

    const task: Ref<Task | undefined> = ref();
    onMounted(async () => {
      task.value = await store.dispatch({ type: "getTask", taskId });
    });

    const userName = computed<string>(() => {
      return store.getters.loggedInUser.fullName;
    });

    return {
      userName,
      task,
    };
  },
  components: {},
});
</script>

<!-- <style lang="scss">
.hi {
  z-index: 1000;
  position: absolute;
  top: 5px;
}
.hi2 {
  z-index: 1000;
  position: absolute;
  top: 50px;
}
</style> -->
