export function minifier(inputData: string) {
  try {
    if (!inputData.trim()) {
      throw new Error("Add JSON data first");
    }

    const parsed = JSON.parse(inputData);

    return JSON.stringify(parsed);
  } catch (error) {
    throw error;
  }
}
