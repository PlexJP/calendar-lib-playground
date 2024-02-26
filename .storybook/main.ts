import type { StorybookConfig } from "@storybook/nextjs";
import path from "node:path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // Storybookのビルド時間を短縮
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      // variantやsize等のunionプロパティ型のコントロールを表示させる
      shouldExtractLiteralValuesFromEnum: true,
      // undefinedになる可能性のある文字列やブール型のコントロールを表示させる
      shouldRemoveUndefinedFromOptional: true,
      // 表示させるPropsを@muiのモジュールに限定させる
      propFilter: (prop) =>
          prop.parent ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) : true,
    },
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
      };
    }
    return config;
  },
};

export default config;
