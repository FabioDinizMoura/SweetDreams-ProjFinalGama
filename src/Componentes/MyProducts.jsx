import React, { useState } from 'react';

const MyProducts = () => {
  // Dados fictícios dos produtos comprados pelo cliente
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      image: 'https://via.placeholder.com/150',
      status: 'Concluído',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      image: 'https://via.placeholder.com/150',
      status: 'Pendente',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      image: 'https://via.placeholder.com/150',
      status: 'Em preparo',
    },
  ];

  // Estado para controlar a página atual
  const [currentPage, setCurrentPage] = useState(1);
  // Número de itens por página
  const itemsPerPage = 8;
  // Índice do último item da página atual
  const lastIndex = currentPage * itemsPerPage;
  // Índice do primeiro item da página atual
  const firstIndex = lastIndex - itemsPerPage;
  // Itens a serem exibidos na página atual
  const currentItems = products.slice(firstIndex, lastIndex);
  // Número total de páginas
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Função para navegar para a próxima página
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Função para navegar para a página anterior
  const previousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-800 mb-8">
          Meus Produtos Comprados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentItems.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {product.status}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <button className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
                  Ver detalhes
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Paginação */}
        <div className="flex justify-center mt-8">
          <nav>
            <ul className="pagination">
              <li className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`}>
              </li>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <li
                  key={page}
                  className={`pagination-item ${page === currentPage ? 'active' : ''}`}
                >
                  <button onClick={() => setCurrentPage(page)} className="pagination-link">
                    {page}
                  </button>
                </li>
              ))}
              <li className={`pagination-item ${currentPage === totalPages ? 'disabled' : ''}`}>

              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-center mt-8">
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
