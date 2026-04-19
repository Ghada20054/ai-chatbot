export async function getTime() {
  return new Date().toLocaleTimeString();
}

export async function calculate(a: number, b: number) {
  return a + b;
}