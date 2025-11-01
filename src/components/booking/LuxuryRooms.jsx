const RoomCard = ({ title, price, beds, foods, bath, imgSrc }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
    <div className="relative">
      <img src={imgSrc} alt={title} className="w-full h-64 object-cover" />
      <span className="absolute top-4 left-4 bg-teal-500 text-white text-sm font-bold px-4 py-1 rounded-full">{price}/Night</span>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <div className="flex space-x-4 text-gray-600 mb-4">
        <span><i className="fas fa-bed mr-1 text-teal-500"></i> {beds} Beds</span>
        <span><i className="fas fa-utensils mr-1 text-teal-500"></i> {foods} Foods</span>
        <span><i className="fas fa-bath mr-1 text-teal-500"></i> {bath} Bath</span>
      </div>
      <p className="text-gray-600 mb-6 flex-grow">
        There are many variations of passages of Lorem
        Ipsum available, but the majority have suffered.
      </p>
      <a href="#" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md font-semibold text-center transition-colors inline-block">
        Read More <i className="fas fa-arrow-right ml-1"></i>
      </a>
    </div>
  </div>
);

const LuxuryRooms = () => (
  <section className="py-24 bg-teal-500/10">
    <div className="container mx-auto max-w-7xl px-4">
      <div className="text-center mb-16">
        <span className="text-teal-600 font-semibold uppercase text-sm">OUR BEST ROOMS</span>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">Luxury Rooms and Resort</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RoomCard 
          title="Deluxe Rooms"
          price="$500"
          beds={2}
          foods={3}
          bath={1}
          imgSrc="https://placehold.co/600x400/ddd/666?text=Deluxe+Room"
        />
        <RoomCard 
          title="Junior Rooms"
          price="$700"
          beds={2}
          foods={3}
          bath={1}
          imgSrc="https://placehold.co/600x400/ddd/666?text=Junior+Room"
        />
        <RoomCard 
          title="Family Rooms"
          price="$900"
          beds={2}
          foods={3}
          bath={1}
          imgSrc="https://placehold.co/600x400/ddd/666?text=Family+Room"
        />
      </div>
    </div>
  </section>
);

export default LuxuryRooms;