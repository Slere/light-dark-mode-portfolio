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
	class=" shadow-md basis-52 bg-gradient-to-tr dark:from-[#72588f] dark:to-[#51749c] from-[#96dbbe] to-[#e1eba6] p-1 dark:p-[3px] rounded-lg mx-3 mb-6  h-[200px] group"
>
	<div class="dark:bg-[#292929] bg-[#fbfcfd] rounded-tl-md rounded-tr-md px-4 py-2 relative  overflow-hidden h-[80%]">
		<h1 class="dark:text-[#ffffff] whitespace-nowrap text-ellipsis text-neutral-600 text-base font-semibold ">
			{title}
		</h1>
		<p class="font-normal dark:text-[#dbd5d5] text-sm leading-[1.3rem] tracking-wide text-neutral-500 break-words ">
			{summary}
		</p>
		<div class="h-3 from-[#fbfcfd] dark:from-[#292929]  to-transparent bg-gradient-to-t absolute bottom-0 left-0  w-full"></div>
	</div>

	{#if !isUnderConstruction}
	<div
			class="px-3 py-1  bg-[#fbfcfd]	 dark:bg-[#292929] h-[20%]   w-full      opacity-100  flex justify-center rounded-br-md rounded-bl-md  "
		>
			<span
				class=" group-hover:h-fit  self-center  font-medium  leading-3	text-[0.9rem] dark:text-[#d0c7d6]  md:dark:bg-inherit rounded-lg text-neutral-700 flex items-center"
			>
				<!-- svelte-ignore a11y-missing-attribute -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<a
					class=" dark:md:bg-inherit pointer-events-none group-hover:pointer-events-auto group-hover:cursor-pointer px-2	 underline-offset-2 underline capitalize  dark:hover:text-stone-50 hover:text-[#63a388]"
					on:click={() => {
						dispatch('project', { project: projectID });
					}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>
</a
				>
				{#if github}
					<a
						href={github}
						target="_blank"
						rel="noreferrer"
						class="pointer-events-none group-hover:pointer-events-auto group-hover:cursor-pointer px-1 underline-offset-2 hover:underline capitalize hover:text-[#63a388] dark:hover:text-stone-50"
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
			class=" w-full h-[20%]  bg-[#fbfcfd] dark:bg-[#292929] opacity-100  flex justify-center rounded-br rounded-bl"
		>
			<span
				class=" group-hover:h-fit text-sm  self-center  font-medium  dark:text-[#f1f0ee] text-neutral-500"
			>
				coming soon...
			</span>
		</div>
	{/if}
</div>

<style lang="postcss">
</style>
