import 'styles/article-preview.scss';

import React from 'react';

const ArticlePreview = ({ title, author }) => {
  return (
    <section className="article-preview">
      <h1>{title}</h1>
      <h3>{author}</h3>
    </section>
  );
};

export default ArticlePreview;
