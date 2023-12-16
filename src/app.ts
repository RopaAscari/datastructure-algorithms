import setExample from "./datastructures/set";
import { stackExample } from "./datastructures";
import queueExample from "./datastructures/queue";
import { bubbleSortExample } from "./algorithms/sorting";

const functionMap: Record<string, Function> = {
  "--set": setExample,
  "--stack": stackExample,
  "--queue": queueExample,
  "--bubbleSort": bubbleSortExample,
};

// Extract command line arguments
const args = process.argv.slice(2);

// Check if any of the flags are present
for (const arg of args) {
  const func = functionMap[arg];
  if (func) {
    // Execute the function associated with the flag
    func();
  }
}
