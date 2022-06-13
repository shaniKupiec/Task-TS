


<template>
  <section>
    <div>{{ msg }}</div>
    <div @click="onClick()">{{ counter }}</div>
  </section>
</template>




<script lang="ts">
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  setup() {
    const msg: Ref<string> = ref("Hello World");
    const counter: Ref<number> = ref(0);

    const onClick = () => {
      counter.value++;
    };

    return {
      msg,
      counter,
      onClick,
    };
  },
});
</script>
