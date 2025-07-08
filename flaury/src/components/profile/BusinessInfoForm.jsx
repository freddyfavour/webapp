import { Camera } from "lucide-react";
import React, { useState } from "react";

const BusinessInfoForm = () => {
  const [businessName, setBusinessName] = useState("");
  const [schedule, setSchedule] = useState("selected");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    // Implement save logic here
    console.log({ businessName, schedule, image });
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6 text-sm">
      <div>
        <label className="block mb-1 text-xl text-gray-700 font-semibold">Business info</label>
        <p className="text-xs text-gray-500 mb-2">Your business name is displayed first on your profile</p>
        <input
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          placeholder="Enter your business name"
          className="w-full px-3 py-2 border rounded-md outline-none"
        />
      </div>

      <div>
        <label className="block mb-2 text-gray-700 font-semibold">Upload banner image</label>
        <label
          htmlFor="upload"
          className="block border border-dashed border-gray-400 rounded-md p-6 h-[10rem] text-center cursor-pointer text-gray-600 bg-[#D9D9D94D]"
        >
          {image ? (
            <img src={image} alt="Preview" className="mx-auto h-[5rem] object-cover" />
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 h-full">
              <Camera />
              <p>Upload profile photo</p>
            </div>
          )}
        </label>
        <input
          type="file"
          id="upload"
          className="hidden"
          onChange={handleImageChange}
          accept="image/*"
        />
      </div>

      <div>
        <label className="block mb-1 text-gray-700 text-lg font-semibold">Time and calendar settings</label>
        <p className="text-xs text-gray-500 mb-2">Set business hours to let your customers know when you are open.</p>

        <label className="block mb-1 text-lg text-gray-700 font-medium">Schedule</label>
        <p className="text-xs text-gray-500 mb-2">Select your business schedule</p>

        <div className="space-y-2 text-gray-900">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="schedule"
              value="selected"
              checked={schedule === "selected"}
              onChange={() => setSchedule("selected")}
            />
            Open for selected hours
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="schedule"
              value="always"
              checked={schedule === "always"}
              onChange={() => setSchedule("always")}
            />
            Always open
          </label>
        </div>
      </div>

      <button
        onClick={handleSave}
        className="w-full bg-[#9d5200] text-white py-2 rounded-md hover:bg-[#7a3f00] transition"
      >
        Save
      </button>
    </div>
  );
};

export default BusinessInfoForm;
