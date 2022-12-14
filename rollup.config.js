import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import path from "path";
import svg from 'rollup-plugin-svg'

// NEW
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
  {
    external: ["react", "react-dom"],
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      svg(),
      resolve({
        alias: {
          react: path.resolve("./node_modules/react"),

          "react-dom": path.resolve("./node_modules/react-dom"),
        },
      }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),

      // NEW
      postcss(),
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
