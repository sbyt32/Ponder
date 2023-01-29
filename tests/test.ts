import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Welcome to SvelteKit');
});

test('search page works correctly', async ({ page }) => {
	let card = 'thalia'
	await page.goto(`/search/${card}`);
	expect(await page.textContent('p')).toBe(`Searching for... ${card}`);
})