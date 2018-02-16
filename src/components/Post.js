import React from 'react';

export default ({ content, contentComponent, description, title, helmet }) => {
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
};