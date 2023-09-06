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
						@click="navigateToMinerRerport"
						class="w-1/6 aspect-square flex justify-center items-center font-bold rounded-full text-center transition-all p-6 bg-blue-600 hover:bg-blue-600/70 active:bg-blue-600/50 cursor-pointer"
					>
						Miner Report
					</li>
					<li
						@click="navigateToNewWorkspace"
						class="w-1/6 aspect-square flex justify-center items-center font-bold rounded-full text-center transition-all p-6 bg-sky-500 hover:bg-sky-500/70 active:bg-sky-500/50 cursor-pointer"
					>
						New Workspace
					</li>
					<li
						@click="navigateToMyWorkspace"
						class="w-1/6 aspect-square flex justify-center items-center font-bold rounded-full text-center transition-all p-6 bg-indigo-600 hover:bg-indigo-600/70 active:bg-indigo-600/50 cursor-pointer"
					>
						My Workspace
					</li>
					<li
						@click="navigateToDashBoard"
						class="w-1/6 aspect-square flex justify-center items-center font-bold rounded-full text-center transition-all p-6 bg-purple-500 hover:bg-purple-500/70 active:bg-purple-500/50 cursor-pointer"
					>
						Dash Board
					</li>
				</ul>
			</div>
		</v-main>
		<footer class="w-full bottom-0 h-auto bg-[rgb(224,224,224)] absolute p-4">
			<div class="flex items-center gap-10">
				<img class="" src="../assets/Footer_Icon.png" />
				<div class="flex flex-col">
					<div class="flex gap-5">
						<span>41062 대구광역시 동구 첨단로 120</span>
						<span>|</span>
						<span>대표전화: (053) 670-0114</span>
						<span>|</span>
						<span>팩스번호: (053) 670-0117</span>
						<span>|</span>
						<span>불공정 개래행위 및 갑질행위 신고센터: (053) 670-0112</span>
					</div>
					<p>COPYRIGHT Ⓒ2022 KOREA GAS CORPORATION ALL RIGHTS RESERVED</p>
				</div>
			</div>
		</footer>
	</v-layout>
</template>

<script>
export default {
	methods: {
		navigateToMinerRerport() {
			window.open("http://110.165.17.239", "_blank");
		},
		navigateToNewWorkspace() {
			alert("준비중입니다.");
		},
		navigateToMyWorkspace() {
			alert("준비중입니다.");
		},
		navigateToDashBoard() {
			alert("준비중입니다.");
		},
	},
};
</script>
