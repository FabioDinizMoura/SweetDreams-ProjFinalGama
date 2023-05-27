import React, { useEffect, useState } from 'react';

const DetilsProductForm = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-white text-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="text-left">
              <span className="text-black cursor-pointer">Voltar</span>
              <h2 className="text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl mt-4">
                Detalhes Do Produto
              </h2>
            </div>

            <div className={`mt-8 ${isMobile ? 'w-full' : ''}`}>
              <form>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium">
                      Nome do Produto
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Digite o nome do produto"
                      className="mt-1 p-5 focus:ring-gray-700 focus:border-gray-700 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md text-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="price" className="block text-sm font-medium">
                      Preço
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      placeholder="Digite o preço do produto"
                      className="mt-1 p-5 focus:ring-gray-700 focus:border-gray-700 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md text-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="photo" className="block text-sm font-medium">
                      Foto
                    </label>
                    <input
                      type="text"
                      name="photo"
                      id="photo"
                      placeholder="Digite a URL da foto do produto"
                      className="mt-1 p-5 focus:ring-gray-700 focus:border-gray-700 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md text-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-sm font-medium">
                      Categoria
                    </label>
                    <select
                      name="category"
                      id="category"
                      className="mt-1 p-5 focus:ring-gray-700 focus:border-gray-700 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md text-black"
                    >
                      <option value="">Selecione a categoria</option>
                      <option value="category1">Categoria 1</option>
                      <option value="category2">Categoria 2</option>
                      <option value="category3">Categoria 3</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium">
                      Descrição
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      placeholder="Digite a descrição do produto"
                      rows="4"
                      className="mt-1 p-5 focus:ring-gray-700 focus:border-gray-700 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md text-black"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-gray-600 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-white"
                  >
                    Salvar
                  </button>
                  <button
                    type="submit"
                    className="inline-flex mt-5 w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-gray-600 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-[#EA0F0F]"
                  >
                    Excluir definitivamente
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div>
            <img
              src="https://via.placeholder.com/400"
              alt="Imagem do produto"
              className=" "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetilsProductForm;
