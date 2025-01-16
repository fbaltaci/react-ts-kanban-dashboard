const TaskCard = (title: string, id: string, points: number) => {
  return (
    <div className="border rounded-lg px-2 m-2 bg-gray-300">
      <div className="text-base font-semibold py-2">{title}</div>
      <div className="flex gap-4 justify-between">
        <div>{id}</div>
        <div>{points}</div>
      </div>
    </div>
  );
};

export default TaskCard;
