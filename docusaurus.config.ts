import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "StarRail Manager docs",
  future: {
    v4: true,
  },

  url: "https://shicoku.github.io",
  baseUrl: "/",
  organizationName: "Shicoku", // Usually your GitHub org/user name.
  projectName: "starrail-manager-docs", // Usually your repo name.
  deploymentBranch: "main",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "jp"],
    localeConfigs: {
      en: {
        label: "English",
      },
      jp: {
        label: "日本語",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        pages: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "StarRail Manager docs",
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/Shicoku/StarRail-Manager-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Contact",
          items: [
            {
              label: "X",
              href: "https://x.com/H2DH8K",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "ChangeLog",
              to: "https://github.com/Shicoku/StarRail-Manager/tree/main/doc/changelog.md",
            },
            {
              label: "GitHub",
              href: "https://github.com/Shicoku/StarRail-Manager",
            },
          ],
        },
      ],
      copyright: `Copyright © 2025 StarRail Manager, Inc. Built with Shicoku.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
