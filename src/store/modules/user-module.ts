// import { User } from "@/models/user.models.js";
// import { userService } from "../../services/user-service";

// export interface State {
//   users: User[],
//   loggedInUser: User
// }

// export default {
//   state: () => ({
//     users: [] as User[],
//     loggedInUser: {} as User,
//   }),
//   getters: {
//     loggedInUser(state) {
//       return state.loggedInUser;
//     },
//   },
//   mutations: {
//     setLoggedInUser(state, { user }: { user: User }) {
//       state.loggedInUser = user;
//     },
//     addUser(state, { user }: { user: User }) {
//       state.users.push(user);
//     },
//   },
//   actions: {
//     async register(state, { userInfo }: { userInfo: User }) {
//       const user: User = userService.register(userInfo);
//       state.commit({ type: "setLoggedInUser", user });
//       state.commit({ type: "addUser", user });
//       console.log("finish register", user);
//     },
//     async login(state, { userInfo }: { userInfo: Partial<User> }) {
//       const user: User | null = userService.login(userInfo);
//       console.log("user", user);
//       if (!user) return false;
//       state.commit({ type: "setLoggedInUser", user });
//       return true;
//     },
//     async logout(state) {
//       state.commit({ type: "setLoggedInUser", user: null });
//     },
//     async demo(state) {
//       return await state.dispatch({
//         type: "login",
//         userInfo: {
//           fullName: "Guest Guest",
//           password: "Guest Guest",
//         },
//       });
//     },
//   },
// };
