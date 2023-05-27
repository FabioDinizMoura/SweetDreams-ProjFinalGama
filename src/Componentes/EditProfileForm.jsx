import React, { useEffect, useState } from 'react';


const EditProfileForm = () => {
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
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-1/2">
        <div className="flex items-center justify-center mb-8">
          <img
            src="https://via.placeholder.com/150"
            alt="Logo da Empresa"
            className="w-32"
          />
        </div>
        
        <div>
          <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-800 mb-8">
            Editar Perfil
          </h2>

          <form>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Digite seu nome"
                  className="mt-1 p-3 focus:ring-2 focus:ring-gray-500 focus:border-transparent block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-gray-700"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Digite seu e-mail"
                  className="mt-1 p-3 focus:ring-2 focus:ring-gray-500 focus:border-transparent block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-gray-700"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Nova Senha
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Digite sua nova senha"
                  className="mt-1 p-3 focus:ring-2 focus:ring-gray-500 focus:border-transparent block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-gray-700"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirmar Nova Senha
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirme sua nova senha"
                  className="mt-1 p-3 focus:ring-2 focus:ring-gray-500 focus:border-transparent block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-gray-700"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Salvar Alterações
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfileForm;
