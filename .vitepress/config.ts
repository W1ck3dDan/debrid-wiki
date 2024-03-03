import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "./docs",
    title: "Debrid Wiki",
    description:
        "Debrid Wiki is a community-driven project that provides information about debrid services, media servers, and other related topics.",
    lastUpdated: true,
    lang: "en-US",
    cleanUrls: true,
    markdown: {
        lineNumbers: true,
    },
    sitemap: {
        hostname: "https://debrid.wiki",
    },
    head: [
        ["link", { rel: "icon", href: "/favicon.ico" }],
        ["meta", { name: "og:type", content: "website" }],
        ["meta", { name: "og:locale", content: "en" }],
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "/logo.png",
        nav: [
            { text: "Home", link: "/" },
            { text: "Guide", link: "/debrid/" },
        ],

        sidebar: [
            {
                text: "Debrid Services",
                collapsed: false,
                items: [
                    { text: "What are debrid services ?", link: "/debrid/" },
                    {
                        text: "Debrid Services",
                        items: [
                            {
                                text: "Real-Debrid",
                                link: "/debrid/real-debrid",
                            },
                            { text: "AllDebrid", link: "/debrid/alldebrid" },
                            { text: "Premiumize", link: "/debrid/premiumize" },
                            { text: "LinkSnappy", link: "/debrid/linksanppy" },
                            { text: "Zevera", link: "/debrid/zevera" },
                            {
                                text: "Simply-Debrid",
                                link: "/debrid/simply-debrid",
                            },
                        ],
                    },
                ],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/debrid/debrid-wiki" },
            { icon: "discord", link: "https://discord.gg/wDgVdH8vNM" },
        ],
        search: {
            provider: "local",
        },
        footer: {
            message: "Released under the MIT License.",
        },
    },
});
