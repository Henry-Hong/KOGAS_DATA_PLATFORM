<template>
	<v-layout ref="app" class="rounded">
		<v-main class="flex w-full h-screen items-center justify-center flex-col">
			<img
				src="../assets/Kogas_Icon.svg"
				alt="KogasLogo"
				class="h-[100px] scale-90"
			/>
			<div
				class="flex flex-col w-[600px] gap-5 bg-white mt-14 justify-center rounded-tl-2xl p-10"
			>
				<h1 class="text-2xl font-bold">로그인</h1>
				<input class="p-3 border" placeholder="아이디" />
				<input type="password" class="p-3 border" placeholder="비밀번호" />
				<button
					class="w-full bg-[rgb(58,99,160)] text-white p-3 hover:opacity-90 active:opacity-80"
					@click="navigateToMain"
				>
					로그인
				</button>
				<button class="hover:underline cursor-pointer">회원가입</button>
			</div>
		</v-main>
	</v-layout>
</template>

<script>
export default {
	methods: {
		navigateToMain() {
			this.$router.push({ name: "main" });
		},
	},
};
</script>
