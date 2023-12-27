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
	class="min-h-[70vh] md:min-h-0 md:border-none relative  border-t dark:border-t dark:border-neutral-800 dark:bg-inherit md:shadow-none md:dark:shadow-none  px-8 md:px-4 pt-4 pb-2 md:mb-4 md:rounded-lg   dark:lg:mx-auto  md:mx-10 lg:mx-auto lg:max-w-[677px]"
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
			class=" text-3xl  w-fit mb-3   capitalize font-light  tracking-tight inline-block dark:text-stone-200 text-neutral-600"
		>
			{title}
		</h1>
		
			<div class="flex flex-wrap gap-[0.4rem] md:gap-2 mb-6">
				{#each tags as tag, i}
				<div class="p-[2px] bg-gradient-to-tr dark:from-[#72588f] dark:to-[#51749c] from-[#96dbbe] to-[#e1eba6] rounded-lg">
					<div
						class="p-2 rounded-md  shadow-sm  text-sm text-[0.83rem] leading-[1rem]    dark:text-stone-300 text-neutral-500 dark:bg-[#303030] bg-[#fafaf9] tracking-tight"
					>
						{tag}</div
					>
				</div>
				{/each}
			
		</div>
	</div>

	<div class="w-full h-fit ">
		{#each sections as section}
			<div class="px-4 pt-2 pb-4 dark:border-none rounded-lg dark:shadow-none shadow shadow-neutral-200 bg-[#fbfcfd] dark:bg-[#292929] mb-4">
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
					class="p-1  dark:font-normal font-light  dark:text-[#dbd5d5] text-neutral-500 text-[0.96rem] tracking-wide leading-[1.40rem] "
				>
					{@html section.content}
				</p>
			</div>
		{/each}
	</div>
	<div class="w-fit mx-auto  rounded    mt-1  ">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<p
			class="cursor-pointer  p-2   text-base dark:text-neutral-300 text-neutral-500 w-fit  inline-block "
			on:click={() => dispatch('project', { project: undefined })}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="w-5 h-5 inline-block -mr-1 "
			>
				<path
					fill-rule="evenodd"
					d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z"
					clip-rule="evenodd"
				/>
			</svg> Projects
		</p>
		{#if github}
			<a href={github} target="_blank" rel="noreferrer"
				><p
					class=" p-2  dark:text-[#c0c0c7] text-neutral-600 underline underline-offset-4 w-fit cursor-pointer inline-block "
				>
					View on Github
				</p></a
			>
		{/if}
	</div>
</div>

<style lang="postcss">
</style>
