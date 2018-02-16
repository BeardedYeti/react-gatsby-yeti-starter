import React from 'react';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';
import Post from '../components/Post';
import Disqus from '../components/Disqus';

/*export const BlogPostTemplate = ({
  content, contentComponent, description, title, helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      { helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};*/

const commentsBlock = (
  <div>
    <Disqus postNode={post} siteMetadata={data.site.siteMetadata} />
  </div>
);

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Post
      content={post.html}
      contentComponent={HTMLContent}
      helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
      title={post.frontmatter.title}
    />
    {commentsBlock}
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "DD MMM, YYYY")
        full_image
      }
    }
  }
`;
/*import React from "react"
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
        <span>
          By: {post.frontmatter.author} - {post.frontmatter.date}
        </span>
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
        author
        date(formatString: "DD MMM, YYYY")
      }
    }
  }
`*/
