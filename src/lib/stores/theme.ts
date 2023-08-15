import { writable } from 'svelte/store';

const createThemeStore =() => {
 const {subscribe,set,update} = writable("");

 return {
    subscribe,
    light: () => set('light'),
    dark: () => set('dark'),
 };
}

export const theme = createThemeStore();