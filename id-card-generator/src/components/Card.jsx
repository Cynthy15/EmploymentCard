import React from 'react';

const IdCard = ({ name, role, department, id, avatar }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 w-80 border border-gray-200">
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
        />

        <div>
          <h2 className="text-lg font-bold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>

      <div className="mt-4 border-t pt-3 text-sm text-gray-700">
        <p><span className="font-semibold">ID:</span> {id}</p>
        <p><span className="font-semibold">Department:</span> {department}</p>
      </div>
    </div>
  );
};

export default IdCard;