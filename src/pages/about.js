import React from "react"
import Helmet from "react-helmet"

export default ({ data }) =>
  (<div>
    <Helmet>
      <title>{`${data.site.siteMetadata.title} - About`}</title>
      <link rel="canonical" href={`${data.site.siteMetadata.siteUrl}/about/`} />
    </Helmet>

    <div>
      <h1>
			  About {data.site.siteMetadata.title}
      </h1>
      <p>
			  We're the only site running on your computer dedicated to showing the best
			  photos and videos of stuff.
      </p>
    </div>
   </div>)

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`