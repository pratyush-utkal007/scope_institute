import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, BookOpen } from 'lucide-react';

export default function CustomSelect({
  id,
  name,
  value,
  onChange,
  onBlur,
  options = [],
  placeholder = 'Select an option',
  disabled = false,
  error = '',
  icon: Icon = BookOpen,
  className = ''
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (isOpen) {
          setIsOpen(false);
          if (onBlur) onBlur({ target: { name, value } });
        }
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, name, value, onBlur]);

  const selectedOption = options.find((opt) => opt.value === value || opt.title === value);

  const handleSelect = (option) => {
    const val = option.value || option.title;
    onChange({ target: { name, value: val } });
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    if (disabled) return;
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (!nextState && onBlur) {
      onBlur({ target: { name, value } });
    }
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        id={id}
        disabled={disabled}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full flex items-center justify-between pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-left transition-all duration-200 cursor-pointer ${
          error
            ? 'border-red-400 bg-red-50/20 focus:ring-2 focus:ring-red-200'
            : isOpen
            ? 'border-[#D39B3A] ring-2 ring-amber-100 bg-white'
            : 'border-slate-200 bg-white hover:border-[#D39B3A]/60'
        } ${disabled ? 'opacity-60 cursor-not-allowed bg-slate-50' : ''}`}
      >
        {/* Left Icon */}
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <Icon className="w-4 h-4 text-slate-400" />
        </div>

        {/* Selected Display Value */}
        <span className="truncate pr-2 font-medium text-slate-800">
          {selectedOption ? (
            <>
              {selectedOption.title || selectedOption.label}
              {selectedOption.duration && (
                <span className="text-slate-400 font-normal ml-1.5">
                  ({selectedOption.duration})
                </span>
              )}
            </>
          ) : (
            <span className="text-slate-400">{placeholder}</span>
          )}
        </span>

        {/* Animated Chevron */}
        <ChevronDown
          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#D39B3A]' : ''
          }`}
        />
      </button>

      {/* Tailwind Custom Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          tabIndex={-1}
          className="absolute z-50 left-0 right-0 top-full mt-1.5 max-h-60 overflow-y-auto rounded-xl bg-white border border-slate-200 shadow-2xl shadow-slate-900/15 py-1.5 divide-y divide-slate-100 transition-all duration-150 animate-in fade-in zoom-in-95"
        >
          {options.map((option, idx) => {
            const optVal = option.value || option.title;
            const isSelected = optVal === value;

            return (
              <div
                key={option.id || idx}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(option)}
                className={`flex items-center justify-between px-3.5 py-2.5 text-sm cursor-pointer transition-colors duration-150 ${
                  isSelected
                    ? 'bg-[#FDF9F0] text-[#041934] font-bold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-[#041934]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                  <span className="leading-tight">{option.title || option.label}</span>
                  {option.duration && (
                    <span
                      className={`text-xs ${
                        isSelected ? 'text-[#D39B3A]' : 'text-slate-400'
                      }`}
                    >
                      ({option.duration}
                      {option.level ? ` – ${option.level}` : ''})
                    </span>
                  )}
                </div>

                {isSelected && (
                  <Check className="w-4 h-4 text-[#D39B3A] shrink-0 ml-2" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

