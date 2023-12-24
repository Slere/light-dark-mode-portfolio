<script lang="ts">
	export let percentage: string;
	export let title: string;
	export let imgHTML: string;
</script>

<div class="py-2 relative group  ">
	<div
		class=" mb-2 group-hover:w-[65%] duration-300 w-full transition-[width] text-sm font-medium text-[0.85rem]"
	>
		<span class="float-left dark:text-stone-300 text-neutral-700  tracking-[0.005em]  "
			>{title}</span
		>
		<span class="float-right dark:text-stone-400 text-neutral-600  tracking-[-0.010em]"
			>{percentage}</span
		>
		<div class="clear-both" />
	</div>
	<div
		class="dark:bg-[#585f86]/20 bg-neutral-800/10 h-1 group-hover:w-[65%] w-full transition-[width] duration-300 "
	>
		<div
			class="h-full  dark:from-[#59507a] dark:to-[#636c9b] from-[#77ac96] to-[#79ac97] bg-gradient-to-r"
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
