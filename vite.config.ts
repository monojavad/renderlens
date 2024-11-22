import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts", // Path to your library's entry point
      name: "RenderLens", // Global variable name for UMD builds
      fileName: (format) => `renderlens.${format}.js`, // Output filename pattern
    },
    rollupOptions: {
      // Exclude dependencies from the bundle
      external: ["react", "vue"], // Add external packages here
      output: {
        globals: {
          react: "React", // External global variable for React
          vue: "Vue", // External global variable for Vue
        },
      },
    },
  },
});
