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

<div class="min-h-[70vh] md:min-h-0 md:border relative bg-[#fbfcfd] border-t dark:border-none dark:bg-inherit md:shadow-none md:dark:shadow-none dark:px-4 px-8 pt-4 pb-2 md:mb-4 md:rounded-lg   dark:mx-4 dark:md:mx-10 dark:lg:mx-auto  md:mx-6 lg:mx-auto lg:max-w-[677px]">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="absolute top-4 right-5 z-10 cursor-pointer dark:bg-inherit bg-[inherit] rounded-full "
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
			class=" text-3xl  w-fit mb-3   capitalize font-light  tracking-tight inline-block dark:text-neutral-300 text-neutral-600"
		>
			{title}
		</h1>
		<div class="flex flex-wrap gap-[0.4rem] md:gap-2 mb-6">
			{#each tags as tag, i}
				<span
					class="px-3  shadow-sm  text-sm text-[0.83rem] leading-[1.1rem]   rounded-lg py-1 dark:text-gray-700 text-neutral-500 dark:bg-[#a58fd4] bg-[#e8e9e8] tracking-tight"
				>
					{tag}</span
				>
			{/each}
		</div>
	</div>

	<div class="w-full h-fit ">
		{#each sections as section}
			<div class="dark:border border-[#362e49] dark:rounded-lg dark:bg-[#1e192b] dark:mb-4">
				<h1
					class="dark:pl-2 dark:border-b dark:border-[#362e49] text-xl mb-0 py-1   dark:text-neutral-300 text-neutral-600 border-b-0 border-neutral-600 "
				>
					<p class="flex  items-center">
						<svg
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
						</svg>
						{section.title}
					</p>
				</h1>
				<p
					class="px-6 dark:py-4 dark:font-normal font-light  dark:text-[#ada6bb] text-neutral-500 text-[0.96rem] tracking-wide leading-[1.40rem] mb-6 dark:mb-0"
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
