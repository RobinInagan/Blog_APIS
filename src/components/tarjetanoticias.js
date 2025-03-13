import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="card mb-3">
      <img src={article.urlToImage} className="card-img-top" alt={article.title} />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <p className="card-text">
          <small className="text-muted">Publicado por: {article.author || 'Desconocido'}</small>
        </p>
        <a
          href={article.url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leer más
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
