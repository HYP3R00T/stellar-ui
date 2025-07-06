// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    markdown: {
        shikiConfig: {
            themes: {
                light: 'catppuccin-latte',
                dark: 'catppuccin-mocha',
            },
        },
    },
    integrations: [
        icon({
            iconDir: "src/assets/icons",
        }),
        mdx(),
    ],
    redirects: {
        "/test": "/test/checkbox",
    },
});
