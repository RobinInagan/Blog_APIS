const Pagination = ({ currentPage, onPageChange }) => {
    return (
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>
              Anterior
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>
              Siguiente
            </button>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Pagination;
  