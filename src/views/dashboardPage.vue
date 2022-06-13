<template>
  <div class="dashboard">
    <header class="dashboard__head">
      <div class="dashboard__head__block"></div>
      <img src="../assets/imgs/user-img.png" alt="" class="dashboard__head__user-img" />
      <div class="dashboard__head__welcome">Welcome {{ userName }}</div>
    </header>
    <main class="dashboard__main">
      <task-list :tasks="tasks"></task-list>
    </main>
  </div>
  <!-- <compostion-page class="hi"></compostion-page>
  <option-page class="hi2"></option-page> -->
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import taskList from "@/components/taskList.vue";
// import compostionPage from "@/views/compostionPage.vue";
// import optionPage from "@/views/optionPage.vue";
import { useStore } from '../store'
import { Task } from "@/models/task.models";

export default defineComponent({
  setup() {
    const store = useStore();

    const userName = computed<string>(() => {
      return store.getters.loggedInUser.fullName;
    });
    const tasks = computed<Task[]>(() => {
      return store.getters.loggedInUser.tasks;
    });

    return {
      userName,
      tasks,
    };
  },
  components: {
    taskList,
    // compostionPage,
    // optionPage,
  },
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
