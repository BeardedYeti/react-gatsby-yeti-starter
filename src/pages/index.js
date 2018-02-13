import React from "react"
import g from "glamorous"
import Link from "gatsby-link"
import Script from "react-load-script"
import Helmet from "react-helmet"

import { rhythm } from "../utils/typography"

export default ({ data }) => {
	console.log(data)
	return (
	  <div>
	  	<Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => {
	        if (typeof window !== `undefined` && window.netlifyIdentity) {
		      window.netlifyIdentity.on("init", user => {
		        if (!user) {
		          window.netlifyIdentity.on("login", () => {
		            document.location.href = "/admin/";
		          });
		        }
		      });
		    }
		    window.netlifyIdentity.init();
          }}
        />

	    <g.H1 display="inline-block" borderBottom="1px solid">
			Blog Posts
	    </g.H1>
	    <h4>
	      {data.allMarkdownRemark.totalCount} Posts
	    </h4>
	    {data.allMarkdownRemark.edges.map(({ node }) => (
		    	<div key={node.id}>
				  <Link to={node.fields.slug} css={{ textDecoration: `none`, color: `inherit` }}> 
				    <g.H3 marginBottom={rhythm(1 / 4)}>
				      {node.frontmatter.title}{" "}
				      <g.Span color="#BBB"> - {node.frontmatter.date}</g.Span>
				    </g.H3>
				    <p>
				      {node.excerpt}
				    </p>
				  </Link>
				</div>
			)
		)}
	  </div>
	)
}

export const query = graphql`
	query IndexQuery {
		allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						author
						date(formatString: "DD MMM, YYYY")
					}
					fields {
						slug
					}
					excerpt(pruneLength: 250)
				}
			}
		}
	}
`
