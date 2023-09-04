<template>
	<div>Hello, This is Little {{ name }} made Hello World!</div>
</template>

<script>
export default {
	name: "LittleHelloWorld",
	props: {
		name: String,
	},
};
</script>

<style scoped>
div {
	color: red;
}
</style>
