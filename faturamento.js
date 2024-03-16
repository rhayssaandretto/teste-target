const fs = require("fs/promises");

const filePath = "dados.json";

async function readDataFile(fileName) {
  try {
    const data = await fs.readFile(fileName, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Erro ao ler dados do arquivo ${fileName}`, error);
  }
}

async function filterRevenue(data) {
  return data.filter((value) => value.valor !== 0).sort((a, b) => a.valor - b.valor);
}

function calculateRevenue(data) {
  const sum = data.reduce((acc, curr) => acc + curr.valor, 0);
  const avg = sum / data.length;

  const quantity = data.reduce((acc, curr) => {
    if (curr.valor > avg) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  
  const maxValue = data[data.length - 1].valor;
  const minValue = data[0].valor;

  console.log(
    "Número de dias no mês em que o valor de faturamento diário foi superior à média mensal:",
    quantity
  );
  console.log(
    "O menor valor de faturamento ocorrido em um dia do mês:",
    minValue
  );
  console.log(
    "O maior valor de faturamento ocorrido em um dia do mês",
    maxValue
  );
}

async function main() {
  const data = await readDataFile(filePath);
  const filteredData = await filterRevenue(data);
  calculateRevenue(filteredData);
}

main();
