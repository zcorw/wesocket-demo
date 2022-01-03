export function toString(data) {
  return Buffer.from(data.toJSON().data).toString('utf8');
}

export function toObject(data) {
  return JSON.parse(toString(data));
}