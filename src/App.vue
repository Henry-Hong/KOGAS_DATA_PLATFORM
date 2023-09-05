<!-- light 68 145 236 -->
<!-- normal 25 65 148 -->

<template>
	<v-layout ref="app" class="rounded rounded-md">
		<v-app-bar name="app-bar">
			<child v-slot="{ print }">
				<v-btn class="mx-auto" @click="print('app-bar')">Get data</v-btn>
			</child>
		</v-app-bar>

		<v-main class="flex w-full items-center flex-col">
			<img
				src="./assets/Kogas_Icon.svg"
				alt="KogasLogo"
				class="h-[100px] mt-12 scale-90"
			/>
			<div
				class="flex flex-col w-[35%] gap-5 bg-white mt-14 justify-center rounded-tl-2xl p-10"
			>
				<h1 class="text-2xl font-bold">로그인</h1>
				<input class="p-3 border" placeholder="아이디" />
				<input class="p-3 border" placeholder="비밀번호" />
				<button
					class="w-full bg-[rgb(58,99,160)] text-white p-3 hover:opacity-90 active:opacity-80"
				>
					로그인
				</button>
				<button class="hover:underline cursor-pointer">회원가입</button>
			</div>
		</v-main>

		<v-footer app name="footer">
			<v-btn class="mx-auto" variant="text" @click="print('footer')">
				Get data
			</v-btn>
		</v-footer>
	</v-layout>
</template>
<script>
import { useLayout } from "vuetify";

const Child = {
	setup(props, ctx) {
		const { getLayoutItem } = useLayout();

		function print(key) {
			alert(JSON.stringify(getLayoutItem(key), null, 2));
		}

		return () => ctx.slots.default({ print });
	},
};

export default {
	components: { Child },
};
</script>
