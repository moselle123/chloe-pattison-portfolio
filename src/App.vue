<template>
	<el-container>
		<el-header>
			<el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false" background-color="#fff" text-color="#4b0561" active-text-color="#054240" @select="changePage">
				<el-menu-item index="0">
					<img style="height: 100%;" src="./assets/chloe logo.png">
				</el-menu-item>
				<el-menu-item index="1">About</el-menu-item>
				<el-menu-item index="2">Contact</el-menu-item>
				<el-menu-item index="3">Worlds</el-menu-item>
				<el-menu-item index="4">Blog</el-menu-item>
				<el-menu-item index="5">Events</el-menu-item>
				<el-menu-item index="6">Gallery</el-menu-item>
			</el-menu>
		</el-header>
		<el-main>
		</el-main>
	</el-container>
</template>
<script>
export default {
	data() {
		return {
			activeIndex: 0
		}
	},
	methods: {
		changePage() {
			return 0;
		}
	},
	mounted() {
		
	}
}
</script>
