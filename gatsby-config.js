module.exports = {
	siteMetadata: {
		title:`Gatsby-Yeti-Starter`,
		author: {
	      name: 'Colin Smith',
	      email: '#',
	      telegram: '#',
	      twitter: '@thecolinsmith',
	      github: 'BeardedYeti',
	      rss: '#',
	      vk: '#'
	    },
		siteUrl: 'https://zen-perlman-7c0316.netlify.com',
		subtitle: `Gatsby-Yeti`,
		disqusShortname: 'yeti-example',
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-catch-links`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: `gray`,
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
		`gatsby-plugin-fastclick`,
		{
		    resolve: `gatsby-plugin-favicon`,
		    options: {
		      logo: "./src/favicon.png",
		      injectHTML: true,
		      icons: {
		        android: true,
		        appleIcon: true,
		        appleStartup: true,
		        coast: false,
		        favicons: true,
		        firefox: true,
		        twitter: false,
		        yandex: false,
		        windows: false
		      }
		    }
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
		{
		    resolve: `gatsby-plugin-netlify`,
		    options: {
		      headers: {
		      	"/*.js": [
				  "Cache-Control: public, max-age=0, must-revalidate"
				],
				"/**/*.html": [
				  "Cache-Control: public, max-age=0, must-revalidate"
				],
		      }, // option to add more headers. `Link` headers are transformed by the below criteria
		      allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
		      mergeSecurityHeaders: true, // boolean to turn off the default security headers
		      mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
		      mergeCachingHeaders: true, // boolean to turn off the default caching headers
		      transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
		      generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
		    },
		},
	],
}