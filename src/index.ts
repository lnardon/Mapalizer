export default function Mapalizer(
  value: number,
  initalBaseVal: number,
  finalBaseVal: number,
  initalTargetVal: number,
  finalTargetVal: number,
  precision: number = 0
): number {
  let result: number = 0;
  result =
    ((value - initalBaseVal) / (finalBaseVal - initalBaseVal)) *
      (finalTargetVal - initalTargetVal) +
    initalTargetVal;

  if (precision !== 0) {
    result = parseFloat(result.toFixed(precision));
  }
  return result;
}
