const StatCircle = ({ icon, count, label }) => {
    return (
      <div className="flex flex-col items-center justify-center bg-green-800 text-white rounded-full w-56 h-56">
        <div className="text-4xl">{icon}</div>
        <p className="text-lg font-bold">{count}</p>
        <p className="text-orange-500 text-sm">{label}</p>
      </div>
    );
  };
  
  export default StatCircle;
  