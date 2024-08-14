const states = {
    "norte": [
        { name: "Acre", flag: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bandeira_do_Acre.svg" },
        { name: "Amapá", flag: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Bandeira_do_Amap%C3%A1.svg" },
        { name: "Amazonas", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Bandeira_do_Amazonas.svg/700px-Bandeira_do_Amazonas.svg.png" },
        { name: "Pará", flag: "https://upload.wikimedia.org/wikipedia/commons/0/02/Bandeira_do_Par%C3%A1.svg" },
        { name: "Rondônia", flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Bandeira_de_Rond%C3%B4nia.svg" },
        { name: "Roraima", flag: "https://upload.wikimedia.org/wikipedia/commons/9/98/Bandeira_de_Roraima.svg" },
        { name: "Tocantins", flag: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Bandeira_do_Tocantins.svg" }
    ],
    "nordeste": [
        { name: "Alagoas", flag: "https://upload.wikimedia.org/wikipedia/commons/8/88/Bandeira_de_Alagoas.svg" },
        { name: "Bahia", flag: "https://upload.wikimedia.org/wikipedia/commons/2/28/Bandeira_da_Bahia.svg" },
        { name: "Ceará", flag: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Bandeira_do_Cear%C3%A1.svg" },
        { name: "Maranhão", flag: "https://upload.wikimedia.org/wikipedia/commons/4/45/Bandeira_do_Maranh%C3%A3o.svg" },
        { name: "Paraíba", flag: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Bandeira_da_Para%C3%ADba.svg" },
        { name: "Pernambuco", flag: "https://upload.wikimedia.org/wikipedia/commons/5/59/Bandeira_de_Pernambuco.svg" },
        { name: "Piauí", flag: "https://upload.wikimedia.org/wikipedia/commons/3/33/Bandeira_do_Piau%C3%AD.svg" },
        { name: "Rio Grande do Norte", flag: "https://upload.wikimedia.org/wikipedia/commons/3/30/Bandeira_do_Rio_Grande_do_Norte.svg" },
        { name: "Sergipe", flag: "https://upload.wikimedia.org/wikipedia/commons/b/be/Bandeira_de_Sergipe.svg" }
    ],
    "centro-oeste": [
        { name: "Distrito Federal", flag: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Bandeira_do_Distrito_Federal_%28Brasil%29.svg" },
        { name: "Goiás", flag: "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_Goi%C3%A1s.svg" },
        { name: "Mato Grosso", flag: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Bandeira_de_Mato_Grosso.svg" },
        { name: "Mato Grosso do Sul", flag: "https://upload.wikimedia.org/wikipedia/commons/6/64/Bandeira_de_Mato_Grosso_do_Sul.svg" }
    ],
    "sudeste": [
        { name: "Espírito Santo", flag: "https://upload.wikimedia.org/wikipedia/commons/4/43/Bandeira_do_Esp%C3%ADrito_Santo.svg" },
        { name: "Minas Gerais", flag: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Bandeira_de_Minas_Gerais.svg" },
        { name: "Rio de Janeiro", flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg" },
        { name: "São Paulo", flag: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg" }
    ],
    "sul": [
        { name: "Paraná", flag: "https://upload.wikimedia.org/wikipedia/commons/9/93/Bandeira_do_Paran%C3%A1.svg" },
        { name: "Rio Grande do Sul", flag: "https://upload.wikimedia.org/wikipedia/commons/6/63/Bandeira_do_Rio_Grande_do_Sul.svg" },
        { name: "Santa Catarina", flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Bandeira_de_Santa_Catarina.svg" }
    ]
};

function updateStates() {
    const regionSelect = document.getElementById('region-select');
    const stateSelect = document.getElementById('state-select');
    const region = regionSelect.value;

    stateSelect.innerHTML = '<option value="">Selecione</option>';
    
    if (region) {
        states[region].forEach(state => {
            const option = document.createElement('option');
            option.value = state.flag;
            option.textContent = state.name;
            stateSelect.appendChild(option);
        });
    }
}

function displayFlag() {
    const stateSelect = document.getElementById('state-select');
    const flagContainer = document.getElementById('flag-container');
    const flagSrc = stateSelect.value;

    flagContainer.innerHTML = '';

    if (flagSrc) {
        const img = document.createElement('img');
        img.src = flagSrc;
        img.alt = 'Bandeira do Estado';
        flagContainer.appendChild(img);
    }
}
