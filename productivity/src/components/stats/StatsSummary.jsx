import StatsCard from "./StatsCard";


const StatsSummary = ({total, completed, pending}) => {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <StatsCard title="Total Tasks" value={total} />
      <StatsCard title="Completed" value={completed} />
      <StatsCard title="Pending" value={pending} />
    </div>
  );
};

export default StatsSummary;
