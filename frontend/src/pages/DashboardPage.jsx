function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Dashboard</h1>
        <p className="text-gray-500 text-sm mb-6">
          Track your job hunt progress
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Applied", value: "0" },
            { label: "Interviews", value: "0" },
            { label: "Offers", value: "0" },
            { label: "Rejected", value: "0" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-gray-200 rounded-xl p-4"
            >
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-3xl font-bold text-blue-600 mt-1">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {["Applied", "Interview", "Offer", "Rejected"].map((col) => (
            <div
              key={col}
              className="bg-white border border-gray-200 rounded-xl p-4 min-h-64"
            >
              <h2 className="text-sm font-semibold text-gray-700 mb-3">
                {col}
              </h2>
              <p className="text-xs text-gray-400">No applications yet</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
