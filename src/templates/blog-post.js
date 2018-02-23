import React from 'react';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';
import Post from '../components/Post'
import Disqus from '../components/Disqus';

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <div>
      <div>
        <Post
          content={post.html}
          contentComponent={HTMLContent}
          helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
          title={post.frontmatter.title}
        />
      </div>
      <div>
        <Disqus postNode={post} siteMetadata={data.site.siteMetadata} />
      </div>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        author {
          name
          twitter
        }
        disqusShortname
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        author
        date(formatString: "DD MMM, YYYY")
        full_image
      }
    }
  }
`;