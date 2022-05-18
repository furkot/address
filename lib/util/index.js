module.exports = {
  arr2obj
};

function arr2obj(arr, v) {
  let makeKey, makeEntry;
  if (!Array.isArray(arr)) {
    arr = Object.entries(arr);
    makeKey = ([, v]) => v;
    makeEntry = ([k]) => k;
  }
  else {
    makeKey = k => k;
    if (v === undefined) {
      makeEntry = makeKey;
    }
    if (typeof v === 'function') {
      makeEntry = v;
    }
    else {
      makeEntry = () => v;
    }
  }
  return arr.reduce((obj, e) => {
    obj[makeKey(e)] = makeEntry(e);
    return obj;
  }, Object.create(null));
}
