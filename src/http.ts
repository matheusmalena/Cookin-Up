import type ICategoria from "@/interfaces/ICategoria";
import type IReceita from "@/interfaces/IReceita";

// // Função para obter dados de uma URL
// async function obterDadosURL<T>(url: string): Promise<T> {
//   const resposta = await fetch(url);
//   return resposta.json() as T;
// }

// // Função para obter categorias da URL remota
// export async function obterCategorias(): Promise<ICategoria[]> {
//   return obterDadosURL<ICategoria[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json');
// }

// Função para obter receitas do arquivo local JSON
export async function obterReceitas(): Promise<IReceita[]> {
  try {
    const resposta = await fetch('/receitas.json'); // Caminho relativo ao arquivo na pasta pública
    const receitas: IReceita[] = await resposta.json();
    return receitas;
  } catch (error) {
    console.error('Erro ao ler o arquivo receitas.json:', error);
    throw error;
  }
}

// Função para obter receitas do arquivo local JSON
export async function obterCategorias(): Promise<ICategoria[]> {
  try {
    const resposta = await fetch('/ingredientes.json'); // Caminho relativo ao arquivo na pasta pública
    const categorias: ICategoria[] = await resposta.json();
    return categorias;
  } catch (error) {
    console.error('Erro ao ler o arquivo receitas.json:', error);
    throw error;
  }
}

