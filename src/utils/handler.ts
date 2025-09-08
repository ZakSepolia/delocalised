export const run = async (func: () => Promise<any>, times: number = 5) => {
  let count = 0;
  let success = false;
  let response: any;
  let error: any;
  while (count < times && !success) {
    try {
      response = await func();
      success = true;
    } catch (err) {
      count++;
      error = err;
    }
  }

  if (success) {
    return response;
  }
  throw new Error(error);
};
