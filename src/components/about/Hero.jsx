import { Link } from "react-router-dom";

const Hero = () => (
  <section className="relative h-72 bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x400/555/fff?text=Hotel+Lobby')" }}>
    <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-bold mb-2">About Us</h1>
      <p className="text-sm"><Link to="/" className="hover:text-teal-500">Home</Link> &gt; About Us</p>
    </div>
  </section>
);

export default Hero;