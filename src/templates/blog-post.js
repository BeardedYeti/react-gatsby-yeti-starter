import React from "react"
import Helmet from "react-helmet"


export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <div className="post-body">
      	  <Helmet title={`Gatsby-Yeti-Starter - ${post.frontmatter.title}`} />
	      <h1>
	        {post.frontmatter.title}
	      </h1>
	      <div dangerouslySetInnerHTML={{ __html: post.html }} />
	  </div>
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`