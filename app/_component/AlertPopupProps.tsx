import React from "react";

interface AlertPopupProps {
  message: string;
  onClose: () => void;
}

const AlertPopup: React.FC<AlertPopupProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-md text-center">
        <p className="text-lg text-gray-800">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AlertPopup;
