// Função para alternar entre dark e light mode
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('theme-toggle');
    body.classList.toggle('light-mode');
    // Salva preferência no localStorage
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        btn.innerHTML = '🌙'; // Lua para modo claro
    } else {
        localStorage.setItem('theme', 'dark');
        btn.innerHTML = '☀️'; // Sol para modo escuro
    }
}

// Salva o perfil selecionado
function saveProfile(name, imgSrc) {
    localStorage.setItem('perfilAtivoNome', name);
    localStorage.setItem('perfilAtivoImagem', imgSrc);
}

// Exibe o perfil ativo se o elemento existir na página
function displayActiveProfile() {
    const name = localStorage.getItem('perfilAtivoNome');
    const img = localStorage.getItem('perfilAtivoImagem');
    const displayContainer = document.getElementById('active-profile-display');

    if (displayContainer && name && img) {
        displayContainer.innerHTML = `
            <img src="${img}" alt="${name}">
            <span>Assitindo como: <strong>${name}</strong></span>
        `;
    }
}

// Aplica o tema salvo ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const btn = document.getElementById('theme-toggle');
    
    displayActiveProfile();

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        btn.innerHTML = '🌙';
    } else {
        btn.innerHTML = '☀️';
    }
});