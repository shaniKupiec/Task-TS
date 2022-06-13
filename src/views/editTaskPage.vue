<template>
  <div class="dashboard">
    <header class="dashboard__head">
      <div class="dashboard__head__block"></div>
      <img src="../assets/imgs/user-img.png" alt="" class="dashboard__head__user-img" />
      <div class="dashboard__head__welcome">Welcome {{ userName }}</div>
    </header>
    <main class="dashboard__main">
      <input type="text" v-model="task.title" />
      <input type="text" v-model="task.subtitle" />
    </main>
  </div>
  <!-- <compostion-page class="hi"></compostion-page>
  <option-page class="hi2"></option-page> -->
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
