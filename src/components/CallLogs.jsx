export default function CallLogs() {
  return (
    <div className="space-y-6">

      {/* ===== Top Filters ===== */}
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
        <input
          type="text"
          placeholder="Search by phone number, issue type..."
          className="w-full lg:max-w-md bg-[#0f1c4d] border border-white/10 rounded-lg px-4 py-2 outline-none"
        />

        <div className="flex flex-wrap gap-3">
          <Select label="All Type" />
          <Select label="All Issues" />
          <Select label="Today" />
        </div>
      </div>

      {/* ===== Main Content ===== */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* ===== Call List ===== */}
        <div className="xl:col-span-2 bg-[#101c4d] rounded-xl p-4">
          <h2 className="font-semibold mb-4">Call List</h2>

          <div className="space-y-3">
            <CallItem
              active
              status="AI Resolved"
              tag="Screen"
              action="Quote Provided"
            />
            <CallItem
              status="Warm Transfer"
              tag="Software"
              action="Escalated to technician"
            />
            <CallItem
              status="Appointment"
              tag="Battery"
              action="Appointment Booked"
            />
            <CallItem
              status="Dropped"
              tag="Unknown"
              action="Call Dropped"
            />
            <CallItem
              status="AI Resolved"
              tag="Screen"
              action="Quote Provided"
            />
          </div>
        </div>

        {/* ===== Call Details ===== */}
        <div className="bg-[#101c4d] rounded-xl p-5 space-y-6">
          <h2 className="font-semibold">Call Details</h2>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <Info label="Phone Number" value="+1 (555) 123-4567" />
            <Info label="Duration" value="4:32" />
            <Info label="Date & Time" value="2025-12-16 10:45 AM" />
            <Info label="Issue Type" value="Screen" />
            <Info label="Call Type" value="AI Resolved" highlight />
            <Info label="Outcome" value="Quote provided" />
          </div>

          {/* Audio Button */}
          <button className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
            ▶ Play Audio Recording
          </button>

          {/* Transcript */}
          <div className="bg-[#0f1c4d] rounded-lg p-4 text-sm space-y-3 max-h-60 overflow-y-auto">
            <p className="text-green-400">
              <strong>AI Assistant:</strong> Thank you for calling UBreakiFix!
              How can I help you today?
            </p>
            <p>
              <strong>Customer:</strong> Hi, my iPhone 13 screen is cracked.
              How much would it cost to repair?
            </p>
            <p className="text-green-400">
              <strong>AI Assistant:</strong> For an iPhone 13 screen repair,
              the price is $199 and includes a 90-day warranty.
            </p>
            <p>
              <strong>Customer:</strong> When are you available?
            </p>
            <p className="text-green-400">
              <strong>AI Assistant:</strong> Today at 2:00 PM or tomorrow at
              10:00 AM. Which works for you?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===== Helpers (same file) ===== */

function Select({ label }) {
  return (
    <button className="px-4 py-2 bg-[#0f1c4d] border border-white/10 rounded-lg text-sm">
      {label} ⌄
    </button>
  );
}

function CallItem({ active, status, tag, action }) {
  const statusColor = {
    "AI Resolved": "bg-green-600",
    "Warm Transfer": "bg-orange-500",
    Appointment: "bg-blue-500",
    Dropped: "bg-red-500",
  };

  return (
    <div
      className={`p-4 rounded-lg border transition cursor-pointer
      ${
        active
          ? "border-blue-500 bg-[#0f1c4d]"
          : "border-white/10 hover:bg-[#0f1c4d]"
      }`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="font-medium">+1 (555) 345-6789</p>
          <p className="text-xs opacity-60">2025-12-16 · 09:42 AM</p>
        </div>

        <span
          className={`text-xs px-2 py-1 rounded ${statusColor[status]}`}
        >
          {status}
        </span>
      </div>

      <div className="flex flex-wrap gap-3 mt-3 text-xs opacity-80">
        <span>⏱ 5:23</span>
        <span>{action}</span>
        <span className="bg-blue-600/30 px-2 py-1 rounded">{tag}</span>
      </div>
    </div>
  );
}

function Info({ label, value, highlight }) {
  return (
    <div>
      <p className="text-xs opacity-60">{label}</p>
      <p className={`text-sm ${highlight ? "text-green-400" : ""}`}>
        {value}
      </p>
    </div>
  );
}
