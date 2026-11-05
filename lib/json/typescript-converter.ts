export function converter(inputData: string) {

  if (!inputData.trim()) {
    throw new Error("Add JSON data first to convert");
  }

  try {
    const parsed = JSON.parse(inputData);

    const entries = Object.entries(parsed);

    const result=entries.map(([key,value])=>{
        const type=  value === null ? "null" : typeof value;

        return `${key} : ${type}`;
    });

    return `Interface Root{\n${result.join("\n")}\n}`

  } catch (error) {
    throw error;
  }
}
