module.exports = {
	siteMetadata: {
		title:`Gatsby-Yeti-Starter`,
		author: `Colin Smith`,
		siteUrl: `http://localhost:8000`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-catch-links`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: `tomato`,
				showSpinner: true,
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
			            resolve: `gatsby-remark-images`,
			            options: {
			            	maxWidth: 1200
			            }
			        },
			        {
			            resolve: `gatsby-remark-responsive-iframe`
			        },
			        `gatsby-remark-prismjs`,
			        `gatsby-remark-copy-linked-files`,
			        `gatsby-remark-autolink-headers`,
				],
			},
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-glamor`,
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-netlify`,
	],
}