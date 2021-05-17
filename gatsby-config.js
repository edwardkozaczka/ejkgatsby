export const siteMetadata = {
    title: `Edward Kozaczka | Teaching Portfolio`,
    description: `Professional teaching portfolio featuring credentials for Pennsylvania Secondary Education, English Language Arts, grades 7-12.`,
    author: `Edward Kozaczka`,
};
export const plugins = [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: `${__home/cabox/workspace}/src/images`,
        },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `kozaczka-teaching-portfolio`,
            short_name: `portfolio`,
            start_url: `/`,
            background_color: `#0b241d`,
            theme_color: `#0b241d`,
            display: `minimal-ui`,
            icon: `src/images/aelius-icon.png`,
        },
    },
    `gatsby-plugin-gatsby-cloud`,
];
