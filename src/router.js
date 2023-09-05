import { createRouter, createWebHistory } from "vue-router";

import LoginView from "./components/LoginView.vue";
import MainView from "./components/MainView.vue";

// import.meta.env.BASE_URL

const router = createRouter({
	history: createWebHistory("/"),
	routes: [
		{
			path: "/",
			name: "login",
			component: LoginView,
		},
		{
			path: "/main",
			name: "main",
			component: MainView,
		},
	],
});

export default router;
