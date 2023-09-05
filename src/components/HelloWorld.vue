<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<LittleHelloWorld name="Heerim" />
	</div>
</template>

<script>
import LittleHelloWorld from "./LittleHelloWorld.vue";

export default {
	name: "HelloWorld",
	props: {
		msg: String,
	},
	components: {
		LittleHelloWorld,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
