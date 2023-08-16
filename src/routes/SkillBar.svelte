<script lang="ts">
	export let percentage: string;
	export let title: string;
	export let imgHTML: string;
</script>

<div class="py-2 relative group  ">
	<div
		class=" mb-2 group-hover:w-[65%] duration-300 w-full transition-[width] text-sm font-medium text-[0.85rem]"
	>
		<span class="float-left dark:text-neutral-300 text-neutral-700  tracking-[0.005em]  "
			>{title}</span
		>
		<span class="float-right dark:text-[#a2a2b1] text-neutral-600  tracking-[-0.010em]"
			>{percentage}</span
		>
		<div class="clear-both" />
	</div>
	<div
		class="dark:bg-[#1a1625]/50 bg-neutral-800/10 h-1 group-hover:w-[65%] w-full transition-[width] duration-300 "
	>
		<div
			class="h-full  dark:from-[#423c6e] dark:to-[#6e65ad] from-[#8abea2] to-[#8abea0] bg-gradient-to-r"
			style="width:{percentage}"
		/>
	</div>

	<div
		class="absolute  h-[100%] w-1/3  opacity-0 top-0 left-2/3 translate-x-full group-hover:translate-x-0 duration-300  group-hover:opacity-100 flex place-content-center place-items-center"
	>
		{@html imgHTML}
	</div>
</div>

<style>
</style>
