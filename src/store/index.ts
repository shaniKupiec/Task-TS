import { User } from "@/models/user.models.js";
import { userService } from "../services/user-service";
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { Task } from "@/models/task.models";

export interface State {
  users: User[];
  loggedInUser: User;
}

export const key: InjectionKey<Store<State>> = Symbol();

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}

export const store = createStore<State>({
  state: {
    users: [] as User[],
    loggedInUser: {} as User,
  },
  getters: {
    loggedInUser(state) {
      return state.loggedInUser;
    },
  },
  mutations: {
    setLoggedInUser(state, { user }: { user: User }) {
      state.loggedInUser = user;
    },
    setUsers(state, { users }: { users: User[] }) {
      state.users = users;
    },
    addUser(state, { user }: { user: User }) {
      state.users.push(user);
    },
    editTask(state, { task }: { task: Task }) {
      const idx = state.loggedInUser.tasks?.findIndex((t) => t.id === task.id);
      state.loggedInUser.tasks[idx] = task;
    },
    addTask(state, { task }: { task: Task }) {
      state.loggedInUser.tasks?.push(task);
    },
    updateUsers(state) {
      const idx = state.users.findIndex((u) => u.id === state.loggedInUser.id);
      state.users[idx] = state.loggedInUser;
    },
  },
  actions: {
    async register(state, { userInfo }: { userInfo: User }) {
      const user: User = userService.register(userInfo);
      state.commit({ type: "setLoggedInUser", user });
      state.commit({ type: "addUser", user });
    },
    async login(state, { userInfo }: { userInfo: Partial<User> }) {
      const user: User | null = userService.login(userInfo);
      if (!user) return false;
      state.commit({ type: "setLoggedInUser", user });
      return true;
    },
    async logout(state) {
      state.commit({ type: "setLoggedInUser", user: null });
    },
    async demo(state) {
      return await state.dispatch({
        type: "login",
        userInfo: {
          fullName: "Guest Guest",
          password: "Guest Guest",
        },
      });
    },
    async editTask(state, { task }: { task: Task }) {
      try {
        if (task.id) {
          userService.editTask(task);
          state.commit({ type: "editTask", task });
        } else {
          const newTask = userService.editTask(task);
          state.commit({ type: "addTask", task: newTask });
        }
      } catch (e) {
        console.error(e);
      } finally {
        state.commit({ type: "updateUsers" });
      }
    },
    async setInitialData(state) {
      const data = userService.getToStore();
      state.commit({ type: "setUsers", users: data[0] });
      state.commit({ type: "setLoggedInUser", user: data[1] });
    },
    async getTask(state, { taskId }: { taskId: string | null }){
      return userService.getTask(taskId);
    },
  },
  modules: {},
});
