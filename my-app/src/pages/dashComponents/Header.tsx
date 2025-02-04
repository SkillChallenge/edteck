import { BellIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl shadow-md">
      {/* Search Input */}
      <div className="flex items-center w-full max-w-lg">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full p-2 pl-4 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      {/* Icons and Profile */}
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <button className="relative p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <BellIcon className="w-6 h-6 text-gray-700" />
        </button>

        {/* Profile Avatar */}
        <div className="w-10 h-10 overflow-hidden rounded-full">
          <Image
            src="/image.png" // Replace this with the actual profile image URL.
            alt="Profile Picture"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
