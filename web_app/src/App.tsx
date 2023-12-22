function App() {

  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     setHeight(window.innerHeight);
  //   });

  // }, [])

  return (
    <main className="bg-slate-800" style={{ height: `${window.innerHeight}px` }}>

      <section className="w-full md:w-[700px] mx-auto">
        <header className="h-20 flex items-center justify-end">
          <button>
            <i className="las la-sun la-lg text-white" />
          </button>
        </header>

        {/* personal info  */}
        <div className="flex gap-7 border-b border-dashed pb-16">
          <div className="w-44 h-44 border rounded-full shadow-lg shadow-slate-900">
          </div>

          <section className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-neutral-100">Diego AP</h1>
            <p className="text-xl font-normal text-neutral-300">frase apacionada en una linea</p>
            {/* social section */}
            <div className="flex gap-2"></div>
          </section>

        </div>

        {/* experience */}

        <section className="flex flex-col pt-14 gap-10">
          <h3 className="text-2xl font-bold text-neutral-100">Experiencia</h3>
          <div>

          </div>
        </section>

        {/* proyectos */}
        <section className="flex flex-col gap-10 pt-10">
          <h3 className="text-2xl font-bold text-neutral-100">Proyectos</h3>
        </section>

      </section>
    </main>
  );
}

export default App;
