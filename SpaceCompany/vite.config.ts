import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import vitePluginSingleSpa from "vite-plugin-single-spa";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
    tailwindcss(),
    TanStackRouterVite({autoCodeSplitting: true}),
		vitePluginSingleSpa({
			serverPort: 4000,
			spaEntryPoints: "src/spa.tsx",
		}),
	],
});
