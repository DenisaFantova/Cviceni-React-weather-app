export const getDateForest = (unixdate) => {
    const date = new Date(unixdate * 1000);
    return `${days[date.getDay()]}, ${
      months[date.getMonth()]
    } ${date.getDate()} `;
  };

