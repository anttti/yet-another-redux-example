import 'styles/articles.scss';

import React from 'react';
import ArticlePreview from 'components/ArticlePreview';

const Articles = ({ articles, isLoading }) => {
  if (isLoading) {
    return <div>Loading articles...</div>;
  }
  return (
    <ul className="article-list">
      {articles.map(article =>
        <ArticlePreview
          title={article.get('title')}
          author={article.get('author')}
        />
      )}
    </ul>
  );
};

export default Articles;
