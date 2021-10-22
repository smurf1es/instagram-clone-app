const CounterButton = ({ amount }) => {
  return (
    <div className="absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
      {amount}
    </div>
  );
};

export default CounterButton;
