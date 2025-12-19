export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Users" value="1,200" />
        <Card title="Tickets Sold" value="3,450" />
        <Card title="Revenue" value="₹1,25,000" />
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-3xl font-bold text-indigo-600 mt-2">
        {value}
      </p>
    </div>
  );
}
