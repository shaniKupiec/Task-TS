<template>
  <section class="home">
    <img src="../assets/imgs/illustration2.png" alt="" class="home__illustration" />
    <div class="home__title">Organize your work and life, finally.</div>
    <div class="home__description">Become focused, organized, and calm with ToDo. The world’s #1 task manager and to-do list app.</div>
    <button class="home__start" @click="start()">get started</button>
    <button class="home__start" @click="demo()">Try demo</button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const start = () => {
      router.push(`/login`);
    };
    const demo = async () => {
      await store.dispatch({ type: "demo" });
      router.push(`/dashboard/task`);
    };

    return {
      start,
      demo,
    };
  },
});
</script>
