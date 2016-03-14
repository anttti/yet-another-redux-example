import 'styles/articles.scss';

import React from 'react';
import ArticlePreview from 'components/ArticlePreview';
import LoadingSpinner from 'components/LoadingSpinner';
import Error from 'components/Error';

const Articles = ({ articles, isLoading, isError }) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Error message="Error loading article list!" />;
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
