:root{
    --cor-fundo: #000104 ;
    --cor-principal: #060a26 ;
    --cor-secundaria: #143b5b; 
    --cor-destaque: #197f84;
    --cor-texto: #D7F9FF;

}

body {
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.caixa-principal{
    background-color: var(--cor-principal);
    width: 90%;
    max-width: 600px;
    text-align: center;
    padding: 20px;
}

h1{
    color: var(--cor-destaque);
}

button {
    background-color: var(--cor-secundaria);
    color: var(--cor-texto);
    border: none;
    border-radius: 15px;
    padding: 15px;
    transition: background-color 0.3s;
}

button:hover{
    background-color: var(--cor-destaque);
    color: var(--cor-principal);
}
