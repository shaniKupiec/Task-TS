<template>
  <section class="task" @click="toggleTask()">
    <div class="task__checkbox" :class="[{ full: taskForUse.doneAt }]"></div>
    <div class="task__text">
      <span class="task__text__title"> {{ taskForUse.title }}</span>
      <span v-if="taskForUse.doneAt" class="task__text__doneAt"> {{ formattedTime }}</span>
    </div>
  </section>
</template>

<script lang="ts">
import { Task } from "@/models/task.models";
import { computed, defineComponent, ref, Ref } from "vue";
import { useStore } from "../store";
import moment from "moment";

export default defineComponent({
  components: {},
  props: {
    task: Object,
  },
  setup(props) {
    const store = useStore();
    const moment1 = moment;
    const taskForUse: Ref<any> = ref(props.task);

    const toggleTask = async () => {
      taskForUse.value.doneAt = taskForUse.value.doneAt ? null : Date.now();
      await store.dispatch({ type: "editTask", task: taskForUse.value });
    };

    // const formattedTime = (date: number) => {
    //   };

    const formattedTime = computed<any>(() => {
      return moment1(taskForUse.value.doneAt).format("DD/MM/YYYY, h:mm a");
    });

    return {
      toggleTask,
      taskForUse,
      formattedTime,
    };
  },
});
</script>
