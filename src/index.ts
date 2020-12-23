// Y = (X-A)/(B-A) * (D-C) + C => Linear Transform Formula

export default function Mapalizer(
  value: number,
  initalBaseVal: number,
  finalBaseVal: number,
  initalTargetVal: number,
  finalTargetVal: number
): number {
  let result = 0;
  result =
    ((value - initalBaseVal) / (finalBaseVal - initalBaseVal)) *
      (finalTargetVal - initalTargetVal) +
    initalTargetVal;
  return result;
}
