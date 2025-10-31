import { useState, useRef, useEffect } from "react";

type MenuItem = {
  label: string;
  value: string;
}

type DropdownProps = {
  label: string;
  items: MenuItem[];
  onSelect: (item: MenuItem) => void;
}

const Dropdown = ({ label, items, onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-right cursor-pointer" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-3 py-1.5 bg-blue-600 text-white font-medium text-sm rounded-sm shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      >
        {label}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-32 bg-white rounded-sm shadow-lg ring-1 ring-black/5 z-10 animate-fadeIn">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                onSelect(item);
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-1.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;