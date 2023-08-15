<script lang="ts">
	import '../app.css';
	import { theme as themeStore } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	const themes = { light: 'light', dark: 'dark' };
	$: {
		if ($themeStore === themes.light) document.documentElement.classList.remove('dark');
		if ($themeStore === themes.dark) document.documentElement.classList.add('dark');
	}
	onMount(() => {
		let localTheme = localStorage.getItem('theme');
		if (localTheme === 'undefined' || localTheme === null) {
			window.matchMedia('(prefers-color-scheme: dark)').matches
				? themeStore.dark()
				: themeStore.light();
			return;
		} else {
			localTheme === 'dark' ? themeStore.dark() : themeStore.light();
		}
	});
</script>

<svelte:head>
	<title>Slere</title>
	<script>
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<slot />
