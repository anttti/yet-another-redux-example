import 'styles/articles.scss';

import React from 'react';
import ArticlePreview from 'components/ArticlePreview';
import LoadingSpinner from 'components/LoadingSpinner';

const Articles = ({ articles, isLoading }) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <ul className="article-list">
      {articles.map(article =>
        <ArticlePreview
          key={article.get('id')}
          id={article.get('id')}
          title={article.get('title')}
          author={article.get('author')}
        />
      )}
    </ul>
  );
};

export default Articles;
