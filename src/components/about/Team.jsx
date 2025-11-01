import useStore from "../../hooks/useStore";

const TeamMemberCard = ({ name, title, image }) => (
  <div className="relative rounded-lg overflow-hidden shadow-lg group h-[450px]">
    <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-teal-300 text-sm">{title}</p>
    </div>
    <div className="absolute top-4 right-4 bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 group-hover:rotate-180">
      <i className="fas fa-plus"></i>
    </div>
  </div>
);

const Team = () => {
  const { staff, loading } = useStore();

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold uppercase text-sm">MEET OUR TEAM</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Expert Staff Persons</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          { !loading ? (
            staff.map((member) => (
              <TeamMemberCard
                key={member._id}
                {...member}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">Loading Staff Data...</p>
          )}
        </div>
      </div>
    </section>
  )};

export default Team;    