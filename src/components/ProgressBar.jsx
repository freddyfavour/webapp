import React from "react";

const ProgressBar = ({ activeStep }) => {
  return (
    <div className="w-2/3 flex items-center gap-4 mb-6">
      {activeStep === 1 && (
        <>
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center">
              {/* Optional: Add content here, e.g., an icon or number */}
            </div>
          </div>
          <div className="flex-1 h-[2px] bg-gray-300" />
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-gray-300 text-gray-500 flex items-center justify-center">
              {/* Optional: Add content here, e.g., an icon or number */}
            </div>
          </div>
          <div className="flex-1 h-[2px] bg-gray-300" />
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-gray-300 text-gray-500 flex items-center justify-center">
              {/* Optional: Add content here, e.g., an icon or number */}
            </div>
          </div>
        </>
      )}
      {activeStep === 2 && (
        <>
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center">
              {/* Optional: Add content here, e.g., an icon or number */}
            </div>
          </div>
          <div className="flex-1 h-[2px] bg-gray-300" />
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center">
              {/* Optional: Add content here, e.g., an icon or number */}
            </div>
          </div>
          <div className="flex-1 h-[2px] bg-gray-300" />
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-gray-300 text-gray-500 flex items-center justify-center">
              {/* Optional: Add content here, e.g., an icon or number */}
            </div>
          </div>
        </>
      )}
      {activeStep === 3 && (
        <>
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center">
              {/* Optional: Add content here, e.g., an icon or number */}
            </div>
          </div>
          <div className="flex-1 h-[2px] bg-gray-300" />
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center">
              {/* Optional: Add content here, e.g., an icon or number */}
            </div>
          </div>
          <div className="flex-1 h-[2px] bg-gray-300" />
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center">
              {/* Optional: Add content here, e.g., an icon or number */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProgressBar;
