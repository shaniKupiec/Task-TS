<template>
  <section>
    <div>{{ msg }}</div>
    <div @click="onClick()">{{ counter }}</div>
  </section>
</template>




<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      msg: "Hello World",
      counter: 0,
    };
  },
  methods: {
    onClick() {
      this.counter++;
    },
  },
});
</script>
