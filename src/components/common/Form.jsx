import React, { useId } from 'react';

const FormInput = ({ labelName, ...props }) => {
  const id = props.id || useId();
  return (
    <label className="flex flex-col gap-2 text-sm" htmlFor={id}>
      <span className="text-gray-700">{labelName}</span>
      <input
        id={id}
        type="text"
        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        {...props}
      />
    </label>
  );
};

const FormDateInput = ({ labelName, ...props }) => {
  const id = props.id || useId();

  return (
    <label className="flex flex-col gap-2 text-sm" htmlFor={id}>
      <span className="text-gray-700">{labelName}</span>
      <input
        id={id}
        type="date"
        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        {...props}
      />
    </label>
  );
};

const FormSelect = ({ labelName, ...props }) => {
  const id = props.id || useId();
  return (
    <label className="flex flex-col gap-2 text-sm" htmlFor={id}>
      <span className="text-gray-700">{labelName}</span>
      <select
        id={id}
        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none text-gray-500"
        {...props}
      />
    </label>
  );
};

export { FormInput, FormSelect, FormDateInput }