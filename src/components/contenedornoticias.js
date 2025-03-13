import React, { useState, useEffect } from 'react';
import Services from '../services/services';
import NewsCard from './tarjetanoticias';
import Pagination from './pagination';

const NewsContainer = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const services = new Services();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Solicita noticias y usuarios por página
        const [newsData, usersData] = await Promise.all([
          services.getNews(currentPage),
          services.getUsers(currentPage)
        ]);

        // Asignar autores a las noticias
        const updatedArticles = newsData.articles.map((article, index) => ({
          ...article,
          author: `${usersData.results[index % usersData.results.length].name.first} ${usersData.results[index % usersData.results.length].name.last}`
        }));

        setArticles(updatedArticles);
      } catch (error) {
        console.error('Error al cargar datos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]); // Actualiza datos al cambiar de página

  const handlePageChange = (page) => {
    setCurrentPage(page); // Cambia la página actual
  };

  if (loading) {
    return <p>Cargando noticias...</p>;
  }

  return (
    <div className="container">
      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-6" key={index}>
            <NewsCard article={article} />
          </div>
        ))}
      </div>
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default NewsContainer;
