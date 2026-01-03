
const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow text-center">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default StatsCard;
