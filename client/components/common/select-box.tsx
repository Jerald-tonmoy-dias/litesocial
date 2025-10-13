import React from "react";

interface SelectBoxProps<T> extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  /** Options array from API (any shape) */
  options: T[];
  /** Key for display label */
  labelKey: keyof T;
  /** Key for value */
  valueKey: keyof T;
  /** Selected value controlled by parent */
  value: string | number | "";
  /** Fired when user changes selection — parent handles it */
  onChange: (selectedValue: string | number, selectedItem: T | null) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Optional label above select */
  label?: string;
  /** Extra classes */
  className?: string;
}

function SelectBox<T>({
  options,
  labelKey,
  valueKey,
  value,
  onChange,
  placeholder = "Select an option",
  label,
  className = "",
  ...props
}: SelectBoxProps<T>) {
  const baseClasses =
    " px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const selectedItem =
      options.find((item) => String(item[valueKey]) === selectedValue) || null;

    onChange(selectedValue, selectedItem);
  };

  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      <select
        className={`${baseClasses} ${className}`}
        value={value}
        onChange={handleChange}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt, i) => (
          <option key={i} value={String(opt[valueKey])}>
            {String(opt[labelKey])}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectBox;
