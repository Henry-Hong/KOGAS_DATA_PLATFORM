<template>
	<v-layout ref="app" class="rounded">
		<v-app-bar :order="order" color="grey-lighten-2" flat>
			<img src="../assets/Kogas_Icon.svg" class="h-10 m-4" />
		</v-app-bar>
		<v-main class="flex w-full items-center flex-col">
			<div class="flex flex-col w-full gap-10 mt-14 justify-center">
				<div class="flex flex-col items-center">
					<h1 class="mx-auto text-[3rem] font-bold">
						한국가스공사 분석 플랫폼
					</h1>
					<p class="text-lg mx-auto">원하시는 서비스를 선택해주세요.</p>
				</div>

				<ul class="w-full flex justify-around p-2 text-white">
					<li
						class="w-52 h-52 flex justify-center items-center font-bold rounded-full text-center transition-all p-6 bg-blue-600 hover:bg-blue-600/70 active:bg-blue-600/50 cursor-pointer"
					>
						Miner Report
					</li>
					<li
						class="w-52 h-52 flex justify-center items-center font-bold rounded-full text-center transition-all p-6 bg-sky-500 hover:bg-sky-500/70 active:bg-sky-500/50 cursor-pointer"
					>
						New Workspace
					</li>
					<li
						class="w-52 h-52 flex justify-center items-center font-bold rounded-full text-center transition-all p-6 bg-indigo-600 hover:bg-indigo-600/70 active:bg-indigo-600/50 cursor-pointer"
					>
						My Workspace
					</li>
					<li
						class="w-52 h-52 flex justify-center items-center font-bold rounded-full text-center transition-all p-6 bg-purple-500 hover:bg-purple-500/70 active:bg-purple-500/50 cursor-pointer"
					>
						Dash Board
					</li>
				</ul>
			</div>
		</v-main>
	</v-layout>
</template>

<script>
export default {};
</script>
