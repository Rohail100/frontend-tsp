const Clients = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto max-w-7xl px-4">
      <div className="text-center mb-16">
        <span className="text-teal-600 font-semibold uppercase text-sm">OUR CLIENTS</span>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">We Have More Then 150+ <br /> Global Clients</h2>
      </div>
      <div className="flex flex-wrap justify-around items-center gap-10">
        <img src="https://placehold.co/150x60/eee/999?text=Logo+1" alt="Client 1" className="h-10 filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
        <img src="https://placehold.co/150x60/eee/999?text=Logo+2" alt="Client 2" className="h-10 filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
        <img src="https://placehold.co/150x60/eee/999?text=Logo+3" alt="Client 3" className="h-10 filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
        <img src="https://placehold.co/150x60/eee/999?text=Logo+4" alt="Client 4" className="h-10 filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
        <img src="https://placehold.co/150x60/eee/999?text=Logo+5" alt="Client 5" className="h-10 filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
      </div>
    </div>
  </section>
);

export default Clients;