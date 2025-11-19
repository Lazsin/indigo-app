import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl shadow-2xl w-[90%] max-w-lg max-h-screen md:max-h-[95vh] overflow-y-auto p-6 md:p-8 
                   animate-slideUp modal-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute -top-5 right-3 text-gray-500 hover:text-[#fe169e] text-4xl font-bold"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
}


