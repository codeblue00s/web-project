export async function loadComponent(componentPath, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        throw new Error(`Container com id "${containerId}" não encontrado.`);
    }
    
    try {
        const response = await fetch(componentPath);
        if(!response.ok) {
            throw new Error(`Erro ao carregar componente: ${response.status} ${response.statusText}`);
        }

        const html = await response.text();
        container.innerHTML = html;
    } catch (err) {
        console.error(`Erro ao carregar componente:`, err);
        throw err;
    }
}