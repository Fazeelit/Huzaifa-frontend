"use client";

import React from "react";
import {Search} from 'lucide-react'

const SearchAndFilter = ({
  searchValue,
  onSearchChange,
  selectedRole,
  onRoleChange,
  roles = ["All"],
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchValue}
            onChange={onSearchChange}
            className="flex h-10 w-full rounded-xl px-10 py-1 border border-slate-300 bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
       
        </div>
        <div className="flex flex-wrap gap-2">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => onRoleChange(role)}
              className={`inline-flex h-8 items-center justify-center gap-2 rounded-md px-3 text-xs font-semibold text-gray-700 ${
                selectedRole === role
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
