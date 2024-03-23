// https://nuxt.com/docs/api/configuration/nuxt-config
import process from "node:process"

const sw = process.env.SW === "true"

export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@vite-pwa/nuxt"],
    pwa: {
        strategies: sw ? "injectManifest" : "generateSW",
        srcDir: sw ? "service-worker" : undefined,
        filename: sw ? "sw.ts" : undefined,
        registerType: "autoUpdate",
        manifest: {
            name: "Nuxt Vite PWA",
            short_name: "NuxtVitePWA",
            theme_color: "#ffffff",
            icons: [
                {
                    src: "pwa-192x192.jpeg",
                    sizes: "192x192",
                    type: "image/png",
                },
                {
                    src: "pwa-512x512.jpeg",
                    sizes: "512x512",
                    type: "image/png",
                },
                {
                    src: "pwa-512x512.jpeg",
                    sizes: "512x512",
                    type: "image/png",
                    purpose: "any maskable",
                },
            ],
        },
        workbox: {
            globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
        },
        injectManifest: {
            globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
        },
        client: {
            installPrompt: true,
            // you don't need to include this: only for testing purposes
            // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
            periodicSyncForUpdates: 20,
        },
        devOptions: {
            enabled: true,
            suppressWarnings: true,
            navigateFallback: "/",
            navigateFallbackAllowlist: [/^\/$/],
            type: "module",
        },
    },
})
