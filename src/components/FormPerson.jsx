const FormPerson = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl h-screen">
        <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
          <div className="flex flex-col">
            <div>
              <h2 className="text-4xl text-victoria-textPrimary font-bold">
                Crear perfil
              </h2>
            </div>
          </div>
          <form>
            <div className="mt-4 space-y-6">
              <div className="col-span-full">
                <label
                  className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                  name="password"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="col-span-full">
                <label
                  className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                  name="password"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="col-span-full">
                <label
                  className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                  name="password"
                >
                  Rol
                </label>
                <input
                  type="text"
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="col-span-full">
                <label
                  className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                  name="password"
                >
                  País
                </label>
                <input
                  type="text"
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="col-span-full">
                <label
                  className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                  name="password"
                >
                  Modalidad
                </label>
                <input
                  type="text"
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div className="col-span-full">
                <label
                  className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                  name="password"
                >
                  Experiencia
                </label>
                <input
                  type="text"
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div className="col-span-full">
                <button
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-victoria-textPrimary bg-victoria-buttonPrimary border-2 rounded-full nline-flex hover:bg-victoria-buttonSecondary hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  type="submit"
                >
                  Submit your request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormPerson;
