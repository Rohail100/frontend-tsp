const FormInput = ({ ...props }) => (
  <input 
    type="text" 
    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
    {...props}
  />
);

const FormDateInput = ({...props }) => (
  <input 
    type="text"
    onFocus={(e) => (e.target.type = 'date')}
    onBlur={(e) => (e.target.type = 'text')}
    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
    {...props}
  />
);

const FormSelect = ({ ...props }) => (
  <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none text-gray-500" {...props}/>
);

export { FormInput, FormSelect, FormDateInput };