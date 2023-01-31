const logTimes = (id, phase, actualTime, baseTime, startTime, commitTime) => {
    console.table({ id, phase, actualTime, baseTime, startTime, commitTime });
  };