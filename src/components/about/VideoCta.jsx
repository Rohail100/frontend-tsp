const VideoCta = () => (
  <section className="relative h-96 bg-cover bg-center my-24" style={{ backgroundImage: "url('https://placehold.co/1920x500/444/fff?text=Resort+Background')" }}>
    <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center px-4">
      <span className="text-teal-500 font-semibold uppercase text-sm">RESORT EXPERIENCE</span>
      <h2 className="text-4xl md:text-5xl font-bold my-4">Relax And Enjoy With Our <br /> Hotel & Resort</h2>
      <button className="mt-6 bg-white hover:bg-gray-200 text-teal-500 w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-colors">
        <i className="fas fa-play text-2xl pl-1"></i>
      </button>
    </div>
  </section>
);

export default VideoCta;