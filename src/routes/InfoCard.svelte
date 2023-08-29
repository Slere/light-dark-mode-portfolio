<script lang="ts">
	
	import SkillBar from './SkillBar.svelte';

	
</script>

<div class="h-fit ">
	<!-- #39393d -->
	<div class="   ">
		<div
			class="dark:md:border-[#49435a] dark:border-[#3e394d] dark:border-b-2 dark:md:border  pt-8 md:pt-6  pb-6 md:ml-3 md:mr-1  md:mt-2  to-[#cee99d] from-[#74ddb1] bg-gradient-to-tr md:rounded-lg  dark:from-[#34303f] dark:to-[#34303f] dark:shadow-none shadow-md md:shadow-neutral-400"
		>
			<div
				class="mx-auto h-28 w-28 mb-2   rounded-full dark:bg-[url('/profile/no-profile-picture-icon.svg')] bg-[url('/profile/no-profile-picture-icon-light.svg')] bg-contain"
			/>
			<p
				class="text-center  text-2xl  tracking-tight font-normal    dark:text-neutral-200 text-neutral-700"
			>
				Rene Ensle
			</p>
			<p class="text-center font-light dark:text-[#a2a2b1] text-neutral-700 ">Fullstack Developer</p>
		</div>
	</div>


	<div class=" p-4	dark:md:border dark:border-[#3e394d] md:mt-4   bg-[#fbfcfd] dark:bg-[#2c2836] md:border   ml-0 md:ml-2  md:mb-2 md:rounded-lg">
		<div
			class=" mb-2 border-b-2 font-medium dark:border-[#4f4d5c] border-neutral-200 h-fit pb-4 font-base text-[0.91rem] tracking-[0.01em] leading-6 "
		>
			<span class="float-left dark:text-[#a2a2b1] text-neutral-500"
				>Residence: <br />City: <br />Age:</span
			>
			<span class="float-right text-right font-medium  dark:text-neutral-300 text-neutral-600"
				>Austria <br /> Vienna <br /> [redacted]</span
			>

			<div class="clear-both" />
		</div>
		<div class="mb-2 border-b-2 dark:border-[#4f4d5c] border-neutral-200 h-fit pb-4">
			<h2 class="dark:text-neutral-200 text-neutral-700 font-medium ">Code</h2>

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
		<div class="mb-2 border-b-2 dark:border-[#4f4d5c] border-neutral-200 h-fit pb-4">
			<h2 class="dark:text-neutral-200 text-neutral-700 font-medium">Frameworks</h2>
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
		<div class="mb-2 border-b-2 dark:border-[#4f4d5c] border-neutral-200 h-fit pb-4">
			<h2 class="dark:text-neutral-200 text-neutral-700 font-medium">Databases</h2>
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
			<h2 class="dark:text-neutral-200 font-medium mb-2">Knowledge & Other Skills</h2>
			<ul class="list-inside ">
				<li class="flex items-center ">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 32 32"
						><path
							class="dark:fill-[#6e65ad] fill-[#57b68e]"
							d="M28.21 2.4a3.5 3.5 0 0 1 1.344 4.763l-11.51 20.554a4 4 0 0 1-6.135 1.047L3.186 21.08a3.5 3.5 0 0 1 4.628-5.252l5.936 5.23l9.696-17.314A3.5 3.5 0 0 1 28.21 2.4Z"
						/></svg
					>

					<span class="leading-relaxed text-sm dark:text-[#a2a2b1]">Spring Boot, Angular, NodeJS</span>
				</li>
				<li class="flex items-center ">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 32 32"
						><path
							class="dark:fill-[#6e65ad] fill-[#57b68e]"
							d="M28.21 2.4a3.5 3.5 0 0 1 1.344 4.763l-11.51 20.554a4 4 0 0 1-6.135 1.047L3.186 21.08a3.5 3.5 0 0 1 4.628-5.252l5.936 5.23l9.696-17.314A3.5 3.5 0 0 1 28.21 2.4Z"
						/></svg
					>

					<span class=" text-sm  leading-relaxed dark:text-[#a2a2b1]">Git, Github, Docker</span>
				</li>
				<li class="flex items-center ">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 32 32"
						><path
							class="dark:fill-[#6e65ad] fill-[#57b68e]"
							d="M28.21 2.4a3.5 3.5 0 0 1 1.344 4.763l-11.51 20.554a4 4 0 0 1-6.135 1.047L3.186 21.08a3.5 3.5 0 0 1 4.628-5.252l5.936 5.23l9.696-17.314A3.5 3.5 0 0 1 28.21 2.4Z"
						/></svg
					>

					<span class="leading-relaxed text-sm dark:text-[#a2a2b1]">German, English</span>
				</li>
			</ul>
		</div>

		<div class="dark:bg-[#413f4e] bg-[#5dc198] p-2 py-2 text-center">
			<a
				href="https://github.com/Slere"
				target="_blank"
				rel="noreferrer"
				class="flex place-content-center w-fit mx-auto hover:underline no-underline dark:decoration-[#6e65ad] decoration-neutral-50 decoration-2 underline-offset-2 text-neutral-50 "
				>Slere <img class="ml-1 max-h-[25px]  " alt="github" src="/logos/github-white.svg" /></a
			>
		</div>
	</div>
</div>

<style>
</style>
