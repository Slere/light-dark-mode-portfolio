<script lang="ts">
	
	import SkillBar from './SkillBar.svelte';

	
</script>

<div class="h-fit ">
	<!-- #39393d -->
	<div class="  ">
		<div
			class="dark:md:border-[#353535] dark:border-[#353535] dark:border-b-2 dark:md:border-none pt-8 md:pt-6  pb-6 md:ml-3 md:mr-1  md:mt-2 to-[#e1ec9e] from-[#83cfaf] md:to-[#e1ec9e] md:from-[#83cfaf] bg-gradient-to-tr md:rounded-lg dark:to-[#313131] dark:from-[#313131]  dark:shadow-none   shadow-md md:shadow-neutral-400  "
		>
			<div
				class="mx-auto h-28 w-28 mb-2   rounded-full dark:bg-[url('/profile/no-profile-picture-icon.svg')] bg-[url('/profile/no-profile-picture-icon-light.svg')] bg-contain"
			/>
			<p
				class="text-center  text-2xl  tracking-tight font-normal    dark:text-[#d0d0d0] text-stone-700"
			>
				Rene Ensle
			</p>
			<p class="text-center font-light dark:text-stone-400 text-stone-700 ">Fullstack Developer</p>
		</div>
	</div>


	<div class=" p-4	dark:md:border-none dark:border-[#535566] md:mt-4   bg-stone-100  dark:bg-[#292929] md:border-none  border-neutral-300  ml-0 md:ml-3 shadow dark:shadow-none  shadow-stone-300 md:mr-1 md:mb-2 md:rounded-lg">
		<div
			class=" mb-2 border-b-2 font-medium dark:border-[#313131] border-neutral-200 h-fit pb-4 font-base text-[0.91rem] tracking-[0.01em] leading-6 "
		>
			<span class="float-left dark:text-neutral-400 text-neutral-500"
				>Residence: <br />City: <br />Age:</span
			>
			<span class="float-right text-right font-medium  dark:text-neutral-300 text-neutral-600"
				>Austria <br /> Vienna <br /> [redacted]</span
			>

			<div class="clear-both" />
		</div>
		<div class="mb-2 border-b-2 dark:border-[#313131] border-neutral-200 h-fit pb-4">
			<h2 class="dark:text-neutral-100 text-neutral-700 font-medium ">Code</h2>

			<SkillBar
				percentage={'70%'}
				title={'Typescript'}
				imgHTML={"<img class='' alt='Typescript' src='/logos/typescript.svg' />"}
			/>
			<SkillBar
				percentage={'90%'}
				title={'Javascript'}
				imgHTML={"<img class='max-h-full py-2 saturate-[0.8]' alt='Javascript' src='/logos/javascript.svg' />"}
			/>
			<SkillBar
				percentage={'85%'}
				title={'HTML'}
				imgHTML={"<img class='max-h-full  py-2 saturate-[0.8]  ' alt='HTML' src='/logos/html5.svg' />"}
			/>
			<SkillBar
				percentage={'85%'}
				title={'CSS 3'}
				imgHTML={"<img class='max-h-full saturate-[0.8] py-2' alt='css3' src='/logos/css3.svg' />"}
			/>
			<SkillBar
				percentage={'50%'}
				title={'Java'}
				imgHTML={"<img class=' saturate-[1] ' alt='java' src='/logos/java.svg' />"}
			/>
		</div>
		<div class="mb-2 border-b-2 dark:border-[#313131] border-neutral-200 h-fit pb-4">
			<h2 class="dark:text-neutral-100 text-neutral-700 font-medium">Frameworks</h2>
			<SkillBar
				percentage={'85%'}
				title={'Svelte'}
				imgHTML={"<img class='' alt='svelte' src='/logos/svelte.svg' />"}
			/>
			<SkillBar
				percentage={'60%'}
				title={'Sveltekit'}
				imgHTML={"<img class='' alt='sveltekit' src='/logos/sveltekit.svg' />"}
			/>
			<SkillBar
				percentage={'90%'}
				title={'TailwindCSS'}
				imgHTML={"<img class='' alt='tailwindcss' src='/logos/tailwind.svg' />"}
			/>
		</div>
		<div class="mb-2 border-b-2 dark:border-[#313131] border-neutral-200 h-fit pb-4">
			<h2 class="dark:text-neutral-100 text-neutral-700 font-medium">Databases</h2>
			<SkillBar
				percentage={'85%'}
				title={'Mysql'}
				imgHTML={"<img class='' alt='mysql' src='/logos/mysql.svg' />"}
			/>
			<SkillBar
				percentage={'40%'}
				title={'MongoDB'}
				imgHTML={"<img class='' alt='mongodb' src='/logos/mongodb.svg' />"}
			/>
		</div>
		<div class=" pb-4 mb-2">
			<h2 class="dark:text-neutral-100 font-medium mb-2">Knowledge & Other Skills</h2>
			<ul class="list-inside ">
				<li class="flex items-center ">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 32 32"
						><path
							class="dark:fill-[#6f6794] fill-[#77ac96]"
							d="M28.21 2.4a3.5 3.5 0 0 1 1.344 4.763l-11.51 20.554a4 4 0 0 1-6.135 1.047L3.186 21.08a3.5 3.5 0 0 1 4.628-5.252l5.936 5.23l9.696-17.314A3.5 3.5 0 0 1 28.21 2.4Z"
						/></svg
					>

					<span class="leading-relaxed text-sm dark:text-[#babac7]">Spring Boot, Angular, NodeJS</span>
				</li>
				<li class="flex items-center ">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 32 32"
						><path
							class="dark:fill-[#6f6794] fill-[#77ac96]"
							d="M28.21 2.4a3.5 3.5 0 0 1 1.344 4.763l-11.51 20.554a4 4 0 0 1-6.135 1.047L3.186 21.08a3.5 3.5 0 0 1 4.628-5.252l5.936 5.23l9.696-17.314A3.5 3.5 0 0 1 28.21 2.4Z"
						/></svg
					>

					<span class=" text-sm  leading-relaxed dark:text-[#babac7]">Git, Github, Docker</span>
				</li>
				<li class="flex items-center ">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 32 32"
						><path
							class="dark:fill-[#6f6794] fill-[#77ac96]"
							d="M28.21 2.4a3.5 3.5 0 0 1 1.344 4.763l-11.51 20.554a4 4 0 0 1-6.135 1.047L3.186 21.08a3.5 3.5 0 0 1 4.628-5.252l5.936 5.23l9.696-17.314A3.5 3.5 0 0 1 28.21 2.4Z"
						/></svg
					>

					<span class="leading-relaxed text-sm dark:text-[#babac7]">German, English</span>
				</li>
			</ul>
		</div>

		<div class="dark:bg-neutral-700 bg-[#77ac96] p-2 py-2 text-center font-medium">
			<a
				href="https://github.com/Slere"
				target="_blank"
				rel="noreferrer"
				class="flex place-content-center w-fit mx-auto hover:underline no-underline dark:decoration-[#6e65ad] decoration-neutral-700 decoration-2 underline-offset-2 text-neutral-700 dark:text-neutral-300 "
				>Slere <svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="currentColor"
				class="ml-1"
				viewBox="0 0 24 24"
				><path
					d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
				/></svg
			></a
			>
		</div>
	</div>
</div>

<style>
</style>
