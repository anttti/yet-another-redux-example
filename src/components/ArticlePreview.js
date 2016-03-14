import 'styles/article-preview.scss';

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ArticlePreview = ({ id, title, author }) => {
  return (
    <Link to={`/article/${id}`}>
      <section className="article-preview">
        <h1>{title}</h1>
        <h3>{author}</h3>
      </section>
    </Link>
  );
};

ArticlePreview.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default ArticlePreview;
