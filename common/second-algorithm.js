function isEmpty(value) {
  if (value instanceof Object) return validateObjectIsEmpty(value);
  else if (value instanceof Array) return validateArrayIsEmpty(value);
  else return validatePrimitiveIsEmpty(value);
}

function validateObjectIsEmpty(obj) {
  return Object.keys(obj).length === 0 || Object.values(obj).every(isEmpty);
}

function validateArrayIsEmpty(array) {
  return array.every(isEmpty);
}

function validatePrimitiveIsEmpty(value) {
  return value === '' || value === null || value === undefined;
}


console.log(isEmpty(null)) // 출력: true
console.log(isEmpty({})) // 출력: true
console.log(isEmpty(0)) // 출력: false
console.log(isEmpty(false)) // 출력: false
console.log(isEmpty([{}, {a:[]}])) // 출력: true
console.log(isEmpty({a: null, b: ''})) // 출력: true
