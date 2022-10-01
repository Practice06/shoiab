module.exports = {
    siteMetadata: {
        siteUrl: "https://shoaibakhter.netlify.app",
        title: "Shoaib Akhter",
        description: "Your Future Business Manager",
        author: "Khubair Ali",
        siteLanguage: "en",
        image: "banner.jpg",
        titleTemplate: "Shoaibakhter_official",
        twitterUsername: "@khubairali",
        getform_url:
            " ",
        socials: [
            {
                id: 1,
                title: "instagram",
                path: "https://www.instagram.com/Shoaibakhter_official/",
                icon: "Instagram",
            },
            {
                id: 2,
                title: "Facebook",
                path: "https://www.facebook.com/profile.php?id=100013392961907",
                icon: "Facebook",
            }
        ],
        contact: {
            phone: "+92 307 1607475",
            email: "",
        },
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: "gatsby-plugin-sass",
            options: {
                useResolveUrlLoader: {
                    options: {
                        sourceMap: true, //default is false
                    },
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                    "gatsby-remark-reading-time",
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Shoaib Akhter",
                short_name: "Shoaibakhter_official",
                theme_color: "#ff014f",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/favicon.png",
            },
        },
    ],
};
