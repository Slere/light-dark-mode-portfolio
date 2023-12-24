<script lang="ts">
	import { onMount } from 'svelte';
	import InfoCard from './InfoCard.svelte';
	import ProjectCard from './ProjectCard.svelte';
	import { clickedOutsiteMobileMenuDispatcher } from '$lib/eventListeners/OutsiteMobileMenuClickTracker';
	import { fade } from 'svelte/transition';
	import { OverlayScrollbarsComponent } from 'overlayscrollbars-svelte';
	import Project from './Project.svelte';
	import { theme as themeStore } from '$lib/stores/theme';

	let project: Project | undefined;
	let isMobileMenuShown: boolean;
	interface Section {
		title: string;
		content: string;
	}
	interface Project {
		id: number;
		title: string;
		tags: string[];
		isUnderConstruction: boolean;
		summary: string;
		github?: string;
		sections: Section[];
	}
	const projects: Project[] = [
		{
			id: 0,
			title: 'Project 1',
			tags: ['Technology 1', 'Technology 2', 'Technology 3', 'Technology 4', 'Technology 5'],
			sections: [
				{
					title: 'Section title',
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere. Id diam vel quam elementum pulvinar etiam. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				},
				{
					title: 'Section title 2',
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere. Id diam vel quam elementum pulvinar etiam. Gravida quis blandit turpis cursus in hac habitasse platea dictumst.'
				}
			],
			summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
			github: 'https://github.com/Slere/',
			isUnderConstruction: false
		},
		{
			id: 1,
			title: 'Project 2',
			tags: ['Technology 1', 'Technology 2', 'Technology 3', 'Technology 4', 'Technology 5'],
			sections: [
				{
					title: 'Section title',
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere. Id diam vel quam elementum pulvinar etiam. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				},
				{
					title: 'Section title 2',
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere. Id diam vel quam elementum pulvinar etiam. Gravida quis blandit turpis cursus in hac habitasse platea dictumst.'
				}
			],
			summary:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere. Id diam vel quam elementum pulvinar etiam. Gravida quis blandit turpis cursus in hac habitasse platea dictumst.',
			github: 'https://github.com/Slere/',
			isUnderConstruction: false
		},

		{
			id: 2,
			title: 'Project 3',
			tags: ['Technology 1', 'Technology 2', 'Technology 3', 'Technology 4', 'Technology 5'],
			sections: [
				{
					title: 'Section title',
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere. Id diam vel quam elementum pulvinar etiam. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				},
				{
					title: 'Section title 2',
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere. Id diam vel quam elementum pulvinar etiam. Gravida quis blandit turpis cursus in hac habitasse platea dictumst.'
				}
			],
			summary:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere. Id diam vel quam elementum pulvinar etiam. Gravida quis blandit turpis cursus in hac habitasse platea dictumst.',
			github: 'https://github.com/Slere/',
			isUnderConstruction: false
		},

		{
			id: 3,
			title: 'Upcoming Project 1',
			tags: ['Svelte', 'Sveltekit', 'TailwindCSS'],
			sections: [],
			summary:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere. Id diam vel quam elementum pulvinar etiam. Gravida quis blandit turpis cursus in hac habitasse platea dictumst.',
			isUnderConstruction: true
		},

		{
			id: 4,
			title: 'Upcoming Project 2',
			tags: ['Svelte', 'Sveltekit', 'TailwindCSS'],
			sections: [],
			summary:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere. Id diam vel quam elementum pulvinar etiam. Gravida quis blandit turpis cursus in hac habitasse platea dictumst.',
			isUnderConstruction: true
		}
	];
	onMount(() => {
		isMobileMenuShown = false;
		project = undefined;
		const mql = window.matchMedia('(min-width: 768px)');
		mql.onchange = (e) => {
			if (e.matches) isMobileMenuShown = false;
		};
	});
	const setProject = (event: CustomEvent) => {
		project = projects.find((p) => p.id === event.detail.project);
	};
	const themes = { light: 'light', dark: 'dark' };

	const switchTheme = () => {
		let localTheme = localStorage.getItem('theme');
		if (localTheme === 'undefined' || localTheme === null) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				localStorage.setItem('theme', 'light');
				themeStore.light();
			} else {
				localStorage.setItem('theme', 'dark');
				themeStore.dark();
			}
		} else {
			if (localTheme === 'dark') {
				localStorage.setItem('theme', 'light');
				themeStore.light();
			} else {
				localStorage.setItem('theme', 'dark');
				themeStore.dark();
			}
		}
	};
</script>

<!-- bg-[#fbfcfd] -->
<div class="lg:max-w-5xl h-full lg:mx-auto flex ">
	<div
		use:clickedOutsiteMobileMenuDispatcher
		on:outclick={() => (isMobileMenuShown = false)}
		class:left-0={isMobileMenuShown}
		class:-left-full={!isMobileMenuShown}
		class="h-full absolute transition-[left] z-20 md:z-0 md:static dark:bg-inherit bg-inherit basis-80 min-w-[270px] shrink-1  dark:shadow-md dark:md:shadow-none shadow-md md:shadow-none  dark:shadow-neutral-900 "
	>
		<OverlayScrollbarsComponent
			class=" h-full"
			options={{
				scrollbars: { autoHide: 'scroll', autoHideDelay: 500, theme: 'os-theme-light' },
				overflow: { x: 'hidden', y: 'scroll' }
			}}
		>
			<InfoCard />
		</OverlayScrollbarsComponent>
	</div>

	<OverlayScrollbarsComponent
		class=" w-full max-h-full shrink-[2]     pb-[2px]   "
		options={{
			scrollbars: { autoHide: 'scroll', autoHideDelay: 500, theme: 'os-theme-light' },
			overflow: { x: 'hidden', y: 'scroll' }
		}}
	>
		<div class="absolute top-0 right-0 z-10  pt-4 flex ">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<svg
				id="menuButton"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="h-6 w-6 cursor-pointer md:hidden "
				on:click={() => {
					isMobileMenuShown = !isMobileMenuShown;
				}}
			>
				<path
					fill-rule="evenodd"
					d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
					clip-rule="evenodd"
				/>
			</svg>
			<div class="flex  px-4  dark:bg-inherit    ">
				<!-- svelte-ignore a11y-click-events-have-key-events  -->
				<div
					class="relative group  w-1/2  cursor-pointer  pr-4     "
					on:click={() => switchTheme()}
				>
					<span
						class="dark:text-inherit text-neutral-500 absolute  translate-y-[0.10rem] transform px-2 text-sm font-bold capitalize opacity-0 transition duration-300 ease-out group-hover:translate-x-3 group-hover:opacity-100 group-hover:delay-75"
						>{$themeStore}</span
					>
		
					{#if $themeStore === themes.dark}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="group-hover:opacity-1 -translate-x-1  visible h-6 w-6 transition duration-300 group-hover:-translate-x-2 "
							><path fill="none" d="M0 0h24v24H0z" /><path
								d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"
								fill="currentColor"
							/></svg
						>
					{/if}
					{#if $themeStore === themes.light}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="group-hover:opacity-1 -translate-x-1 visible h-6 w-6 transition duration-300 group-hover:-translate-x-2 fill-current"
							><path
								d="M12 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 2Zm5 10a5 5 0 1 1-10 0a5 5 0 0 1 10 0Zm4.25.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM12 19a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 19Zm-7.75-6.25a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5Zm-.03-8.53a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06Zm1.06 15.56a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 1 1 1.06 1.06l-1.5 1.5Zm14.5-15.56a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 0 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06Zm-1.06 15.56a.75.75 0 1 0 1.06-1.06l-1.5-1.5a.75.75 0 1 0-1.06 1.06l1.5 1.5Z"
							/></svg
						>
					{/if}
				</div>
			</div>
		</div>
		<div class="w-full max-w-[570px]  h-fit mx-auto mt-12 text-center px-4">
			<h1
				class="font-bold font-['Poppins'] text-4xl lg:text-5xl md:leading-[3.5rem] tracking-tighter h-fit text-neutral-700 dark:text-stone-200"
			>
				Software Developer Portfolio and quick fact sheet
			</h1>
			<p class="text-stone-600 md:text-neutral-500 dark:text-stone-300 text-lg max-w-[377px] mx-auto mt-4">
				Repository to showcase all of my recent projects in both light & dark mode. Made with Sveltekit and TailwindCSS 
			</p>
			<a
				class="mx-auto mt-4 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 dark:border-none bg-white dark:bg-[#9d88fa] px-5 py-2 text-sm text-gray-600 dark:text-[#1a1625] shadow-md transition-colors hover:border-neutral-500 dark:hover:bg-[#ba9ffb] dark:hover:shadow-neutral-700 "
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
					<span class="hidden sm:inline-block">View on</span> GitHub
				</p></a
			>
		</div>
		
		{#key project}
			<div in:fade class="h-fit mt-8 ">
				{#if project === undefined}
					<div class="w-full h-fit pr-[2px] xl:pr-0 dark:bg-inherit md:bg-inherit dark:md:bg-inherit dark:border-none  dark:border-neutral-800 md:border-none">
						<h1
							class="text-lg  tracking-tight  capitalize font-normal dark:text-neutral-200 md:text-neutral-600  text-stone-600  px-2 xs:pl-2 md:pl-4 py-2 pt-2   border-[#29292b]  bg-inherit "
						>
							My projects
						</h1>
					</div>

					<div
						class=" pb-2  px-2 xxs:px-2 xs:px-4 md:px-6 lg:px-6 w-full flex   justify-center  flex-wrap bg-inherit dark:bg-inherit md:bg-inherit dark:md:bg-inherit
						 "
					>
						{#each projects as pr}
							<ProjectCard
								title={pr.title}
								summary={pr.summary}
								projectID={pr.id}
								isUnderConstruction={pr.isUnderConstruction}
								github={pr.github}
								on:project={setProject}
							/>
						{/each}
					</div>
				{:else}
					<Project
						title={project.title}
						tags={project.tags}
						sections={project.sections}
						github={project.github}
						on:project={setProject}
					/>
				{/if}
			</div>
		{/key}
	</OverlayScrollbarsComponent>
</div>

<style lang="postcss">
</style>
