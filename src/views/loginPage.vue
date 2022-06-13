<template>
  <section class="login">
    <div class="login__title">welcome back</div>
    <img src="../assets/imgs/illustration1.png" alt="" class="login__illustration" />
    <form @submit.prevent="login" class="login__form">
      <input type="text" name="" id="" v-model="fullName" placeholder="Enter Your Full Name" required />
      <input type="text" name="" id="" v-model="password" placeholder="Enter Your Password" required />
      <button class="login__form__submit">login</button>
    </form>
    <footer class="login__footer">
      Don't have Account ?
      <router-link to="/register">register</router-link>
    </footer>
  </section>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from '../store'

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();

    const fullName: Ref<string> = ref('')
    const password: Ref<string> = ref('')


    const login = async () => {
      const userInfo = {
        fullName: fullName.value,
        password: password.value,
      };
      // const isOkay = false;
      const isOkay = await store.dispatch({ type: "login", userInfo });
      console.log("isOkay", isOkay);
      if (isOkay) router.push(`/dashboard`);
      else {
        fullName.value = "";
        password.value = "";
        alert("try again");
      }
    };

    return {
      login,
      fullName,
      password,
    };
  },
});
</script>
