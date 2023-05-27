import React from 'react';

const AdminPanel = () => {
  return (
    <div className="bg-white text-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 className="text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Painel Administrativo
          </h2>
          <p className="mt-2 text-lg">Bem-vindo, Admin!</p>
        </div>

        <div className="flex flex-wrap justify-start mt-8">
          <button className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded mr-4 mb-4">
            Produtos
          </button>
          <button className="bg-gray-500 hover:bg-gray-800 text-white py-2 px-4 rounded mr-4 mb-4">
            Usuários
          </button>
          <button className="bg-gray-500 hover:bg-gray-800 text-white py-2 px-4 rounded mb-4">
            Pedidos
          </button>
        </div>

        <div className="flex justify-start mt-8">
          <button className="bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded">
            Adicionar Novo
          </button>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-500">
              <tr>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Nome</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Categoria</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Preço</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300 text-left">Produto 1</td>
                <td className="py-2 px-4 border-b border-gray-300 text-left">Categoria 1</td>
                <td className="py-2 px-4 border-b border-gray-300 text-left">R$19.99</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <button className="bg-gray-300 hover:bg-gray-800 text-white py-1 px-2 rounded mr-2">
                    Ver detalhes
                  </button>
                  <button className="bg-black hover:bg-gray-800 text-white py-1 px-2 rounded">
                    Excluir
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300 text-left">Produto 2</td>
                <td className="py-2 px-4 border-b border-gray-300 text-left">Categoria 2</td>
                <td className="py-2 px-4 border-b border-gray-300 text-left">R$29.99</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <button className="bg-gray-300 hover:bg-gray-800 text-white py-1 px-2 rounded mr-2">
                    Ver detalhes
                  </button>
                  <button className="bg-black hover:bg-gray-800 text-white py-1 px-2 rounded">
                    Excluir
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300 text-left">Produto 3</td>
                <td className="py-2 px-4 border-b border-gray-300 text-left">Categoria 3</td>
                <td className="py-2 px-4 border-b border-gray-300 text-left">R$39.99</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <button className="bg-gray-300 hover:bg-gray-800 text-white py-1 px-2 rounded mr-2">
                    Ver detalhes
                  </button>
                  <button className="bg-black hover:bg-gray-800 text-white py-1 px-2 rounded">
                    Excluir
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
