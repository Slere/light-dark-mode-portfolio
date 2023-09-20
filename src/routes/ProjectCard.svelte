<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let projectID: number;
	export let summary: string;
	export let title: string;
	export let isUnderConstruction: boolean;
	export let github: string | undefined;
</script>

<div
	class="bg-[#fbfcfd] shadow-md dark:shadow-none pb-0 md:dark:border dark:border dark:border-[#362e49] dark:md:shadow-md flex-auto content-end  max-w-[250px] md:max-w-[250px]  xs:basis-48   md:h-auto mx-3 mb-6       md:min-w-none  md:shadow-md hover:shadow-lg 	rounded-lg  dark:shadow-neutral-900/70    group md:bg-[#fbfcfd] dark:bg-[#1e192b]  p-3 	    relative   overflow-hidden "
>
	<div class=" overflow-hidden">
		<div class="w-[calc(100%)]">
			<h1
				class="dark:bg-inherit 	 dark:text-[#ffffff] text-neutral-600  text-base font-normal   pl-2 mb-[2px]   overflow-hidden  whitespace-nowrap text-ellipsis"
			>
				{title}
			</h1>
		</div>

		<p
			class=" max-h-[20vh] min-h-[120px] text-sm dark:font-normal font-light  leading-[1.3rem] tracking-wide px-2   dark:text-[#9590a1] text-neutral-500 break-words"
		>
			{summary}
		</p>
	</div>
	{#if !isUnderConstruction}
		<div
			class="absolute bottom-8 left-0 w-full   bg-gradient-to-t  dark:from-[#1e192b] from-[#fbfcfd] to-transparent h-3 "
		/>
		<div
			class="px-3 bg-[#fbfcfd] dark:bg-[#1e192b]  absolute bottom-0 left-0  w-full   dark:md:bg-[#1e192b] h-9  opacity-100  flex justify-center "
		>
			<span
				class=" group-hover:h-fit  self-center  font-medium  leading-3	text-[0.9rem] dark:text-[#cdc6dd]  md:dark:bg-inherit rounded-lg text-neutral-700 flex items-center"
			>
				<!-- svelte-ignore a11y-missing-attribute -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<a
					class=" dark:md:bg-inherit    rounded-xl  pointer-events-none group-hover:pointer-events-auto group-hover:cursor-pointer px-2	 underline-offset-2 underline capitalize  dark:hover:text-neutral-300 hover:text-[#97c797]"
					on:click={() => {
						dispatch('project', { project: projectID });
					}}>read</a
				>
				{#if github}
					<a
						href={github}
						target="_blank"
						rel="noreferrer"
						class="pointer-events-none group-hover:pointer-events-auto group-hover:cursor-pointer px-1 underline-offset-2 hover:underline capitalize hover:text-[#97c797] dark:hover:text-neutral-100"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24"
							><path
								d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
							/></svg
						></a
					>
				{/if}
			</span>
		</div>
	{:else}
		<div
			class="absolute bottom-8 left-0 w-full   bg-gradient-to-t dark:from-[#1e192b] from-[#fbfcfd] to-transparent h-3 "
		/>
		<div
			class="absolute bottom-0 left-0 w-full  bg-[#fbfcfd] dark:bg-[#1e192b] h-9 opacity-100  flex justify-center "
		>
			<span
				class=" group-hover:h-fit text-sm  self-center  font-medium  dark:text-[#675f7a] text-neutral-500"
			>
				coming soon...
			</span>
		</div>
	{/if}
</div>

<style lang="postcss">
</style>
