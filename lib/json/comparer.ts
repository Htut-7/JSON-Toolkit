export function comparer(inputA: string, inputB: string) {
    
  if (!inputA.trim()) {
    throw new Error("Add JSON data first to convert");
  }

  if (!inputB.trim()) {
    throw new Error("Add JSON data first to convert");
  }

  try {
    const parsedA = JSON.parse(inputA);
    const parsedB = JSON.parse(inputB);

    const keys = new Set([...Object.keys(parsedA), ...Object.keys(parsedB)]);

    const result = Array.from(keys).map((key) => {
      const valueA = parsedA[key];
      const valueB = parsedB[key];

      if (!(key in parsedA)) {
        return `${key}: Added ${valueB}`;
      }

      if (!(key in parsedB)) {
        return `${key}: Removed ${valueA}`;
      }

      if (JSON.stringify(valueA) !== JSON.stringify(valueB)) {
        return `${key}: Changed (${valueA} → ${valueB})`;
      }

      return `${key}: Same`;
    });

    return result.join("\n");
  } catch {
    throw new Error("Invalid JSON format");
  }
}
