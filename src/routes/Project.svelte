<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	interface Section {
		title: string;
		content: string;
	}
	export let title: string;
	export let tags: string[];
	export let sections: Section[];
	export let github: string | undefined;

	const dispatch = createEventDispatcher();
</script>

<div
	class=" shadow-neutral-200  bg-[#f5f5f4] dark:bg-[#252525]  min-h-[70vh] md:min-h-0 md:dark:border-none  relative  border-t  md:border-none  dark:border-t dark:border-neutral-800  md:shadow-none md:dark:shadow-none  px-8 md:px-4 pt-4 pb-2 md:mb-4 md:rounded     md:mx-3 lg:mx-4 "
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="dark:text-stone-300 dark:hover:text-stone-100 absolute top-4 right-5 z-10 cursor-pointer dark:bg-inherit bg-[inherit] rounded-full "
		on:click={() => dispatch('project', { project: undefined })}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
	</div>
	<div class="w-full h-fit     ">
		<h1
			class=" text-3xl  w-fit mb-2   capitalize font-light  tracking-tight inline-block dark:text-stone-200 text-neutral-600"
		>
			{title}
		</h1>
		
			<div class="flex flex-wrap gap-[0.4rem] md:gap-2 mb-3">
				{#each tags as tag, i}
				<div class="p-[2px] bg-gradient-to-tr dark:from-[#72588f] dark:to-[#51749c] from-[#83cf94] to-[#e5f09e] rounded-lg">
					<div
						class="p-2 rounded-md  shadow-sm  text-sm text-[0.83rem] leading-[1rem]    dark:text-stone-300 text-neutral-500 dark:bg-[#303030] bg-stone-50 tracking-tight"
					>
						{tag}</div
					>
				</div>
				{/each}
			
		</div>
	</div>

	<div class="w-full h-fit ">
		{#each sections as section}
			<div class="px-1 pt-3 pb-1 dark:border-none rounded dark:shadow-none dark:bg-inherit bg-[#f5f5f4]  mb-4">
				<h1
					class="  text-xl mb-0 dark:font-medium  dark:text-stone-100 text-neutral-600 border-b-0 border-neutral-600 "
				>
					<p class="flex  items-center">
						<!-- <svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6 dark:text-[#9171f8] text-[#5d806d] dark:hidden"
						>
							<path
								fill-rule="evenodd"
								d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
								clip-rule="evenodd"
							/>
						</svg> -->
						{section.title}
					</p>
				</h1>
				<p
					class="pl-1  dark:font-normal font-light  dark:text-[#dbd5d5] text-neutral-500 text-[0.96rem] tracking-wide leading-[1.40rem] "
				>
					{@html section.content}
				</p>
			</div>
		{/each}
	</div>
	<div class="w-fit mx-auto mb-2  ">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<p
			class="cursor-pointer   p-2 font-medium	  text-base dark:text-neutral-300 text-[#5e5f5f] w-fit  inline-block "
			on:click={() => dispatch('project', { project: undefined })}
		>
			 Back
		</p>
		{#if github}
		<a
		class="inline-flex max-w-fit items-center justify-center align-middle space-x-2 rounded-full border border-gray-300 dark:border-none bg-white dark:bg-[#9789d3] px-5 py-2 text-sm font-medium text-neutral-700 dark:text-[#1a1625] shadow-md transition-colors hover:border-neutral-400 dark:hover:bg-[#ba9ffb] dark:hover:shadow-neutral-700 "
		href="https://github.com/Slere/light-dark-mode-portfolio"
		target="_blank"
		rel="noopener noreferrer"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			fill="currentColor"
			viewBox="0 0 24 24"
			><path
				d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
			/></svg
		>
		<p>
			GitHub
		</p></a
	>
		{/if}
	</div>
</div>

<style lang="postcss">
</style>
