import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./index.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const app = createApp(App);
const pinia = createPinia();
const vuetify = createVuetify({
	components,
	directives,
	theme: {
		themes: {
			light: {
				kogas: "#003399",
				kogaslight: "#4491EC",
			},
		},
	},
});

app.use(pinia).use(vuetify).mount("#app");
