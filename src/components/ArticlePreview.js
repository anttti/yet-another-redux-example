import 'styles/article-preview.scss';

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ArticlePreview = ({ id, title, author }) => {
  return (
    <section className="article-preview">
      <Link to={`/article/${id}`} className="article-preview__link">
        <h1 className="article-preview__title">{title}</h1>
      </Link>
      <h3 className="article-preview__author">{author}</h3>
    </section>
  );
};

ArticlePreview.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default ArticlePreview;
