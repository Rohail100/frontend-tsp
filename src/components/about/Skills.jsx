const ProgressBar = ({ label, percentage }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-gray-900">{label}</span>
      <span className="text-sm font-medium text-gray-900">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const Skills = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="container mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-16 items-center">
      {/* Left Content (Skills) */}
      <div className="md:pr-8">
        <span className="text-teal-600 font-semibold uppercase text-sm">OUR SKILLS</span>
        <h2 className="text-4xl font-bold text-gray-900 my-4">Why Choose for us?</h2>
        <p className="text-gray-600 mb-8">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even.
        </p>
        <div className="space-y-6">
          <ProgressBar label="Guest Satisfaction" percentage="88" />
          <ProgressBar label="Chef Master" percentage="95" />
          <ProgressBar label="IT Solution" percentage="92" />
        </div>
      </div>
      
      {/* Right Image Composite */}
      <div className="relative h-[450px] mt-12 md:mt-0">
        <img src="https://placehold.co/600x450/ddd/666?text=Beach+View" alt="Beach View" className="w-full h-full object-cover rounded-lg shadow-lg" />
        <div className="absolute -bottom-16 -left-10 md:-left-16 w-72">
          <img src="https://placehold.co/300x200/eee/777?text=Pool+Area" alt="Pool Area" className="rounded-lg shadow-xl w-full" />
        </div>
      </div>
    </div>
  </section>
);

export default Skills;