<template>
	<v-layout ref="app" class="rounded">
		<v-main class="flex w-full items-center flex-col">
			<div
				class="flex flex-col w-[35%] gap-5 bg-white mt-14 justify-center rounded-tl-2xl p-10"
			>
				<h1 class="text-2xl font-bold">메인뷰입니다.</h1>
				<input class="p-3 border" placeholder="아이디" />
				<input class="p-3 border" placeholder="비밀번호" />
				<button
					class="w-full bg-[rgb(58,99,160)] text-white p-3 hover:opacity-90 active:opacity-80"
					@click="goToLogin"
				>
					메인뷰
				</button>
				<button class="hover:underline cursor-pointer">등등</button>
			</div>
		</v-main>
	</v-layout>
</template>

<script>
export default {};
</script>
