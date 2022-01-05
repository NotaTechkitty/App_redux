const FETCHING = (action) => {
  return `FETCHING_${action}`;
};
const SUCCESS = (action) => {
  return `SUCCESS_${action}`;
};
const FAILED = (action) => {
  return `FAILED_${action}`;
};

export { FETCHING, SUCCESS, FAILED };
