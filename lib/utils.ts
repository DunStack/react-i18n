interface NestedObject {
  [key: string]: string | number | null | undefined | this;
}

export function getIn<T extends NestedObject>(object: T, key: string) {
  if (
    (object[key] && typeof object[key] === "string") ||
    typeof object[key] === "number"
  ) {
    return object[key];
  }

  const strings = key.split(".");
  let currentValue = object;

  for (let string of strings) {
    if (typeof currentValue[string] === "string") {
      return currentValue[string];
    }

    currentValue = currentValue[string] as T;
  }

  return "";
}
