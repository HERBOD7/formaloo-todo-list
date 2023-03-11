import React from 'react';

const Status = (props) => {
  const { tasksCount, completedCount } = props;
  return (
    <div className="text-xs font-light ml-1">
      {tasksCount === completedCount && tasksCount !== 0 ? (
        <span className="bg-green-200 text-green-600 rounded px-1">
          Completed
        </span>
      ) : (
        ''
      )}
      {tasksCount !== 0 && tasksCount !== completedCount ? (
        <span className="text-slate-500">
          {completedCount}/{tasksCount}
        </span>
      ) : (
        ''
      )}
    </div>
  );
};

export default Status;
