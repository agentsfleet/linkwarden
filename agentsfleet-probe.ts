// Probe file for the agentsfleet github-pr-reviewer fleet (M199).
//
// This exists to give the reviewer fleet a diff with something to say about.
// The function below has two deliberate, obvious problems a reviewer should
// catch: it divides without guarding zero, and it returns undefined on the
// empty case while claiming a number return.

export function averageLinkAge(agesInDays: number[]): number {
  let total = 0;
  for (let i = 0; i <= agesInDays.length; i++) {
    total += agesInDays[i];
  }
  return total / agesInDays.length;
}
