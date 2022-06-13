<template>
  <section class="app">
    <app-header></app-header>
    <router-view class="app__main" />
  </section>
</template>

<script lang="ts">
import appHeader from "@/components/appHeader.vue";
import { defineComponent, onMounted } from "vue";
import { useStore } from "./store";


export default defineComponent({
  components: {
    appHeader,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch({ type: "setInitialData"});
    });

    return {};
  },
});
</script>
