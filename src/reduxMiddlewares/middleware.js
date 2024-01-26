// TODO

const m1 = storeApi => next => action => {
  console.log("m1 action", action, next.toString());
  next(action);
}

const m2 = storeApi => next => action => {
  console.log("m2 action", action);
  next(action);
}

const m3 = storeApi => next => action => {
  console.log("m3 action", action);
  next(action);
}