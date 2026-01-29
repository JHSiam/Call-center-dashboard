export default function Appointments() {
  return (
    <div className="space-y-6">

      {/* ===== Stats Cards ===== */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Booked"
          value="34"
          sub="+8 this week"
          color="blue"
        />
        <StatCard
          title="AI Booked"
          value="28"
          sub="82% of total"
          color="green"
        />
        <StatCard
          title="Pending"
          value="3"
          sub="Awaiting confirmation"
          color="yellow"
        />
      </section>

      {/* ===== Booking Link ===== */}
      <section className="bg-[#101c4d] rounded-xl p-5">
        <h2 className="font-semibold mb-3">Booking Link</h2>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            readOnly
            value="https://techstore.com/book?id=store123"
            className="flex-1 bg-[#0f1c4d] border border-white/10 rounded-lg px-4 py-2 text-sm outline-none"
          />
          <button className="px-4 py-2 rounded-lg bg-[#1a2b6d] hover:bg-[#223b8f] transition">
            Copy Link
          </button>
        </div>
      </section>

      {/* ===== Appointments Table ===== */}
      <section className="bg-[#101c4d] rounded-xl p-4 overflow-x-auto">
        <table className="w-full text-sm min-w-[900px]">
          <thead>
            <tr className="text-left text-gray-400 border-b border-white/10">
              <Th>Client Name</Th>
              <Th>Client Phone</Th>
              <Th>Client Email</Th>
              <Th>Device</Th>
              <Th>Repair Type</Th>
              <Th>Date</Th>
              <Th>Slot</Th>
              <Th>Start Time</Th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/5">
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
          </tbody>
        </table>
      </section>

      {/* ===== Pagination ===== */}
      <div className="flex justify-center items-center gap-4 text-sm opacity-80">
        <button className="hover:text-white">‹ Previous</button>
        <button className="px-3 py-1 rounded bg-[#1a2b6d]">1</button>
        <button>2</button>
        <button>3</button>
        <span>...</span>
        <button>11</button>
        <button className="hover:text-white">Next ›</button>
      </div>
    </div>
  );
}

/* ===== Helpers (same file) ===== */

function StatCard({ title, value, sub, color }) {
  const colors = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
  };

  return (
    <div className="bg-[#101c4d] rounded-xl p-5 flex justify-between items-start">
      <div>
        <p className="text-sm opacity-70">{title}</p>
        <h3 className="text-2xl font-bold mt-2">{value}</h3>
        <span className="text-xs opacity-60">{sub}</span>
      </div>

      <div className={`w-10 h-10 rounded-lg ${colors[color]} opacity-80`} />
    </div>
  );
}

function Th({ children }) {
  return <th className="py-3 px-3 font-medium">{children}</th>;
}

function Td({ children }) {
  return <td className="py-3 px-3">{children}</td>;
}

function Row() {
  return (
    <tr className="hover:bg-[#0f1c4d] transition">
      <Td>Jane D.</Td>
      <Td>01960858765</Td>
      <Td>admin@gmail.com</Td>
      <Td>Apple / iPhone 13 Pro</Td>
      <Td>
        <span className="px-2 py-1 text-xs rounded bg-blue-600/30">
          Screen
        </span>
      </Td>
      <Td>02/06/2026</Td>
      <Td>1</Td>
      <Td>09:00</Td>
    </tr>
  );
}
