import { useState } from "react";


export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="flex-1 min-h-screen bg-gradient-to-b from-[#0b1437] to-[#101c4d] text-white p-4 md:p-8">
      

      {/* Tabs */}
      <div className="flex gap-6 border-b border-white/10 mb-6">
        <button
          onClick={() => setActiveTab("profile")}
          className={`pb-3 text-sm md:text-base ${
            activeTab === "profile"
              ? "border-b-2 border-blue-400 text-blue-400"
              : "opacity-70"
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab("password")}
          className={`pb-3 text-sm md:text-base ${
            activeTab === "password"
              ? "border-b-2 border-blue-400 text-blue-400"
              : "opacity-70"
          }`}
        >
          Password Settings
        </button>
      </div>

      {/* Content */}
      {activeTab === "profile" && (
        <div className="max-w-3xl space-y-6">
          
          {/* Profile Image */}
          <div>
            <p className="text-sm opacity-70 mb-2">Profile Image</p>
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/100"
                className="w-20 h-20 rounded-full border"
              />
              <button className="px-4 py-2 text-sm bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <Info label="Full Name" value="Jane D." />
            <Info label="Email" value="jane@gmail.com" />
            <Info label="Store Name" value="Ubreakifix Store" />
            <Info
              label="Store Address"
              value="123 Main Street, New York, NY 10001"
            />
          </div>
        </div>
      )}

      {/* Password Settings */}
      {activeTab === "password" && (
        <div className="max-w-md space-y-4">
          <Input label="Current Password" type="password" />
          <Input label="New Password" type="password" />
          <Input label="Confirm Password" type="password" />
          <button className="w-full mt-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition">
            Update Password
          </button>
        </div>
      )}
    </div>
  );
}

/* Reusable Components */
function Info({ label, value }) {
  return (
    <div className="flex flex-col md:flex-row md:gap-6">
      <p className="w-40 text-sm opacity-60">{label}:</p>
      <p className="text-sm">{value}</p>
    </div>
  );
}

function Input({ label, type }) {
  return (
    <div>
      <label className="text-sm opacity-70">{label}</label>
      <input
        type={type}
        className="w-full mt-1 px-3 py-2 bg-[#0b1437] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
