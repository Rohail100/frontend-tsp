import useStore from "../../hooks/useStore";

const RoomCard = ({ title, pricePerNight, description, beds, maxGuests, baths, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
    <div className="relative">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
      <span className="absolute top-4 left-4 bg-teal-500 text-white text-sm font-bold px-4 py-1 rounded-full">{pricePerNight}/Night</span>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <div className="flex space-x-4 text-gray-600 mb-4">
        <span><i className="fas fa-users mr-1 text-teal-500"></i> {maxGuests} Guests</span>
        <span><i className="fas fa-bed mr-1 text-teal-500"></i> {beds} Beds</span>
        <span><i className="fas fa-bath mr-1 text-teal-500"></i> {baths} Baths</span>
      </div>
      <p className="text-gray-600 mb-6 flex-grow">
        {description}
      </p>
      <a href="#" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md font-semibold text-center transition-colors inline-block">
        Read More <i className="fas fa-arrow-right ml-1"></i>
      </a>
    </div>
  </div>
);

const LuxuryRooms = () => {
  const { rooms, loading } = useStore();

  return (
    <section className="py-24 bg-teal-500/10">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold uppercase text-sm">OUR BEST ROOMS</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Luxury Rooms and Resort</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          { !loading ? (
            rooms.map((room) => (
              <RoomCard
                key={room._id}
                {...room}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">Loading Hotel Data...</p>
          )}
        </div>
      </div>
    </section>
);}

export default LuxuryRooms;