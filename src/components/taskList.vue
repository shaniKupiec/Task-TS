<template>
  <section class="task-list">
    <header class="task-list__header">
      <div class="task-list__header__title">task List</div>
      <img src="../assets/imgs/plus-button.png" class="task-list__header__add" @click="add()" alt="" />
    </header>
    <task-preview v-for="task in tasks" :key="task.id" :task="task"></task-preview>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router';
import taskPreview from "./taskPreview.vue";

export default defineComponent({
  components: {
    taskPreview,
  },
  props: {
    tasks: Object,
  },
  setup() {
    const router = useRouter();
    const add = () => {
      router.push(`/dashboard/editTask`);
    };
    return {
      add
    }
  }
})
</script>
