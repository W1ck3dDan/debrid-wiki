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
    ignoreDeadLinks: true,
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
                text: "Introduction",
                link: "/intro",
            },
            {
                text: "Debrid Services",
                collapsed: true,
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
                        ],
                    },
                ],
            },
            {
                text: "Media Servers",
                collapsed: true,
                items: [
                    {
                        text: "What are media servers ?",
                        link: "/media-servers/",
                    },
                    {
                        text: "Media Servers",
                        items: [
                            { text: "Plex", link: "/media-servers/plex" },
                            {
                                text: "Jellyfin",
                                link: "/media-servers/jellyfin",
                            },
                        ],
                    },
                ],
            },
            {
                text: "Content Providers",
                collapsed: true,
                items: [
                    {
                        text: "What are content providers ?",
                        link: "/content-providers/",
                    },
                    {
                        text: "Content Providers",
                        items: [
                            {
                                text: "Trakt",
                                link: "/content-providers/trakt",
                            },
                            {
                                text: "Overseerr",
                                link: "/content-providers/overseerr",
                            },
                        ],
                    },
                ],
            },
            {
                text: "Scraping Services",
                collapsed: true,
                items: [
                    {
                        text: "What are scraping services ?",
                        link: "/scraping-services/",
                    },
                    {
                        text: "Scraping Services",
                        items: [
                            {
                                text: "Jackett",
                                link: "/scraping-services/jackett",
                            },
                            {
                                text: "Prowlarr",
                                link: "/scraping-services/prowlarr",
                            },
                        ],
                    },
                ],
            },
            {
                text: "Tools",
                collapsed: true,
                items: [
                    {
                        text: "Tools & Utilities",
                        items: [
                            {
                                text: "Docker",
                                link: "/tools/docker",
                            },
                            {
                                text: "WSL",
                                link: "/tools/wsl",
                            },
                        ],
                    },
                ],
            },
            {
                text: "Chad Contributors",
                link: "/team",
            },
            {
                text: "Contributing",
                link: "/contributing",
            }
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/debrid/debrid-wiki" },
            { icon: "discord", link: "https://discord.gg/wDgVdH8vNM" },
        ],
        search: {
            provider: "local",
            options: {
                miniSearch: {
                    searchOptions: {
                        combineWith: "AND",
                        fuzzy: false,
                        // @ts-ignore
                        boostDocument: (
                            _,
                            term,
                            storedFields: Record<string, string | string[]>
                        ) => {
                            const titles = (storedFields?.titles as string[])
                                .filter((t) => Boolean(t))
                                .map((t) => t.toLowerCase());
                            // Uprate if term appears in titles. Add bonus for higher levels (i.e. lower index)
                            const titleIndex =
                                titles
                                    .map((t, i) => (t?.includes(term) ? i : -1))
                                    .find((i) => i >= 0) ?? -1;
                            if (titleIndex >= 0) return 10000 - titleIndex;

                            return 1;
                        },
                    },
                },
                detailedView: true,
            },
        },
        footer: {
            message: "Released under the MIT License.",
        },
        editLink: {
            pattern:
                "https://github.com/debrid/debrid-wiki/edit/main/docs/:path",
        },
    },
});
